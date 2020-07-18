import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";

import "../assets/icheck-bootstrap.min.css";
import "../assets/fontawesome-free/css/all.min.css";
import "../assets/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "../assets/jqvmap/jqvmap.min.css";
import "../assets/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../assets/daterangepicker/daterangepicker.css";
import "../assets/summernote/summernote-bs4.css";
import "../assets/dist/css/adminlte.min.css";
import SidePanel from "../components/SidePanel";

function AllProblems() {
  const user = useState(auth().currentUser);
  const [handle, setHandle] = useState("prodelta");
  const [problems, setProblems] = useState([]);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const getHandle = async () => {
    try {
      let userId = user.uid;
      await db
        .ref("/users/" + userId)
        .once("value")
        .then(function (snapshot) {
          let dx = (snapshot.val() && snapshot.val().handle);
          
          setHandle(dx);
          fetch(
            proxyurl +
              `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=300`
          )
            .then((response) => response.json())
            .then((item) => {
              let tmp = item["result"];
      
              let acceptedProblems = {};
              let unsolvedProblems = {};
              let toSolve = [];
      
              for (let i = 0; i < tmp.length; i++) {
                let ob = tmp[i];
                const pack = {
                  contestId: ob.problem.contestId,
                  name: ob.problem.name,
                  index: ob.problem.index,
                  url: `https://codeforces.com/problemset/problem/${ob.problem.contestId}/${ob.problem.index}`,
                };
      
                if (ob.verdict === "OK") {
                  acceptedProblems[pack.name] = true;
                } else {
                  if (
                    acceptedProblems[pack.name] !== true &&
                    unsolvedProblems[pack.name] !== true
                  ) {
                    unsolvedProblems[pack.name] = true;
                    toSolve.push(pack);
                  }
                }
              }
              console.log(acceptedProblems);
              setProblems(toSolve);
            })
            .catch((err) => console.log(err));

        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHandle();    
  }, []);

  const renderProblem = (problem) => {
    return (
      <tr>
        <td>{problem.name}</td>
        <a href={problem.url}>
          <td>{problem.url}</td>
        </a>
      </tr>
    );
  };

  return (
    <body class="hold-transition sidebar-mini layout-fixed">
      Problem Name
      <div class="wrapper">
        <SidePanel/>

        <div class="content-wrapper">
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0 text-dark">
                    Problems you couldnt solve sadly
                  </h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Upsolve Problems</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style={{ paddingLeft: 40 }}>
            <div class="col-md-12" style={{ paddingRight: 25 }}>
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Problems</h3>

                  <div class="card-tools">
                    <div
                      class="input-group input-group-sm"
                      style={{ width: 150 }}
                    >
                      <input
                        type="text"
                        name="table_search"
                        class="form-control float-right"
                        placeholder="Search"
                      ></input>

                      <div class="input-group-append">
                        <button type="submit" class="btn btn-default">
                          <i class="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-body table-responsive p-0">
                  <table class="table table-hover text-nowrap table-striped ">
                    <thead>
                      <tr>
                        <th>Problem Name</th>
                        <th>Problem URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {problems && problems.length > 0 ? (
                        problems.map((problem) => renderProblem(problem))
                      ) : (
                        <p>No problems found</p>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default AllProblems;
