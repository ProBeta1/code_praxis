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
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/home" class="brand-link">
            {/* <img src={avatar} class="brand-image img-circle elevation-3" style="opacity: .8"></img> */}
            <span class="brand-text font-weight-heavy">CODE PRAXIS</span>
          </Link>

          <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                <div class="image">
                  {/* <img src={} class="img-circle elevation-2" alt="image" style={{width : 180, height: 180, padding : 10}}></img> */}
                </div>
                <a
                  href="#"
                  class="d-block"
                  style={{ fontSize: 40, textAlign: "center", fontWeight: 40 }}
                >
                  {}
                </a>
                <a
                  href="#"
                  class="d-block"
                  style={{ fontSize: 20, textAlign: "center", fontWeight: 20 }}
                >
                  {}
                </a>
              </div>
            </div>

            <nav class="mt-2">
              <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li class="nav-item has-treeview">
                  <Link to="/dashboard" class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/problems" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                      Problem Set
                      <span class="right badge badge-danger"></span>
                    </p>
                  </Link>
                </li>
                <li class="nav-item has-treeview">
                  <Link to="/discuss" class="nav-link">
                    <i class="nav-icon fas fa-copy"></i>
                    <p>
                      Discuss
                      <i class="fas fa-angle-left right"></i>
                      <span class="badge badge-info right">New</span>
                    </p>
                  </Link>
                </li>
                <li class="nav-item has-treeview menu-open">
                  <Link to="/all" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                      Upsolve List
                      <i class="fas fa-angle-left right"></i>
                      <span class="right badge badge-danger"></span>
                    </p>
                  </Link>
                </li>
                <li class="nav-item has-treeview">
                  <Link to="/duel" class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Code Duel
                      <i class="fas fa-angle-left right"></i>
                      <span class="badge badge-info right">6</span>
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

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
