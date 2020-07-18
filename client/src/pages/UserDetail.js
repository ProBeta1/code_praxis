import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Heatmap from "react-heatmap-grid";
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
//piechart

function UserDetail() {
  const [user, setUser] = useState(auth().currentUser);
  const [handle, setHandle] = useState("");
  const [name, setName] = useState("");
  const [readError, setReadError] = useState(null);
  const [rating, setRating] = useState();
  const [country, setCountry] = useState("");
  const [rank, setRank] = useState();
  const [maxRating, setMaxRating] = useState();
  const [maxRank, setMaxRank] = useState("");
  const [org, setOrg] = useState("");
  const [avatar, setAvatar] = useState("");

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    setReadError(null);

    const getIt = async () => {
      console.log(user.uid);
      try {
        let userId = user.uid;
        await db
          .ref("/users/" + userId)
          .once("value")
          .then(function (snapshot) {
            let username =
              (snapshot.val() && snapshot.val().username) || "Anonymous";
            let handle = (snapshot.val() && snapshot.val().handle) || "tourist";
            setHandle(handle);
            setName(username);
            fetch(
              proxyurl +
                `https://codeforces.com/api/user.info?handles=${handle}`
            )
              .then((response) => response.json())
              .then((item) => {
                let tmp = item["result"][0];
                console.log(tmp);
                setCountry(tmp.country);
                setRating(tmp.rating);
                setAvatar(tmp.avatar);
                setMaxRating(tmp.maxRating);
                setRank(tmp.rank);
                setMaxRank(tmp.maxRank);
                setOrg(tmp.organization);
              })
              .catch((err) => console.log(err));
          });
      } catch (err) {
        setReadError(err.message);
      }
    };

    getIt();
  }, []);

  const xLabels = new Array(31).fill(0).map((_, i) => ``);
  const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <body class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper">
        {/* Name:{name}
    Rating:{rating}
    Rank:{rank}
    maxRating:{maxRating}
    maxRank:{maxRank} */}
        {/* <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <Link to="/home" class="nav-link">Home</Link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Logout</a>
        </li>
      </ul>
      <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"></input>
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      </form>
    </nav> */}

        <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/home" class="brand-link">
            {/* <img src={avatar} class="brand-image img-circle elevation-3" style="opacity: .8"></img> */}
            <span class="brand-text font-weight-heavy">CODE PRAXIS</span>
          </Link>

          <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                <div class="image">
                  <img
                    src={avatar}
                    class="img-circle elevation-2"
                    alt="image"
                    style={{ width: 180, height: 180, padding: 10 }}
                  ></img>
                </div>
                <Link
                  to="/dashboard"
                  class="d-block"
                  style={{ fontSize: 40, textAlign: "center", fontWeight: 40 }}
                >
                  {handle}
                </Link>
                <Link
                  to="/dashboard"
                  class="d-block"
                  style={{ fontSize: 20, textAlign: "center", fontWeight: 20 }}
                >
                  {name}
                </Link>
              </div>
            </div>

            <nav class="mt-2">
              <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li class="nav-item has-treeview menu-open">
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
                <li class="nav-item has-treeview">
                  <Link to="/all" class="nav-link">
                    <i class="nav-icon fas fa-th"></i>
                    <p>
                      All Problems
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
                  <h1 class="m-0 text-dark">Dashboard</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style={{ paddingLeft: 50 }}>
            <div class="col-md-4">
              <div class="card">
                <div class="header" style={{ padding: 20 }}>
                  <h1 class="title" style={{ fontSize: 30 }}>
                    PROFILE DETAILS
                  </h1>
                  <p class="category"></p>
                </div>
                <div class="content">
                  <form style={{ padding: 30 }}>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="control-label">FULL NAME</label>
                          <input
                            placeholder="your name"
                            disabled
                            type="text"
                            class="form-control"
                            value={name}
                            style={{ width: 320 }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="control-label">RATING</label>
                          <input
                            placeholder="your rating"
                            disabled
                            type="text"
                            class="form-control"
                            value={rating}
                            style={{ width: 320 }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="control-label">RANK</label>
                          <input
                            placeholder="your rank"
                            disabled
                            type="text"
                            class="form-control"
                            value={rank}
                            style={{ width: 320 }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="control-label">MAX RATING</label>
                          <input
                            placeholder="max rating"
                            disabled
                            type="text"
                            class="form-control"
                            value={maxRating}
                            style={{ width: 320 }}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="control-label">MAX RANK</label>
                          <input
                            placeholder="max rank"
                            disabled
                            type="text"
                            class="form-control"
                            value={maxRank}
                            style={{ width: 320 }}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="footer">
                    <div class="stats">
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section class="col-lg-7 connectedSortable">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">
                    <i class="ion ion-clipboard mr-1"></i>
                    To Do List
                  </h3>

                  <div class="card-tools">
                    <ul class="pagination pagination-sm">
                      <li class="page-item">
                        <a href="#" class="page-link">
                          &laquo;
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          1
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          2
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          3
                        </a>
                      </li>
                      <li class="page-item">
                        <a href="#" class="page-link">
                          &raquo;
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="card-body">
                  <ul class="todo-list" data-widget="todo-list">
                    <li>
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>

                      <div class="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          value=""
                          name="todo1"
                          id="todoCheck1"
                        ></input>
                        <label for="todoCheck1"></label>
                      </div>

                      <span class="text">Complete 3 problem of strings</span>

                      <small class="badge badge-danger">
                        <i class="far fa-clock"></i> 2 mins
                      </small>

                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                    <li>
                      <span class="handle">
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="fas fa-ellipsis-v"></i>
                      </span>
                      <div class="icheck-primary d-inline ml-2">
                        <input
                          type="checkbox"
                          value=""
                          name="todo2"
                          id="todoCheck2"
                          checked
                        ></input>
                        <label for="todoCheck2"></label>
                      </div>
                      <span class="text">Do 10 questions in a day</span>
                      <small class="badge badge-info">
                        <i class="far fa-clock"></i> 4 hours
                      </small>
                      <div class="tools">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-o"></i>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="card-footer clearfix">
                  <button type="button" class="btn btn-info float-right">
                    <i class="fas fa-plus"></i> Add item
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </body>
    // <div className="bg-gray-600">
    //   Name:{name}
    //   Rating:{rating}
    //   Rank:{rank}
    //   maxRating:{maxRating}
    //   maxRank:{maxRank}
    //     <div className="">
    //       <img src={avatar} alt="image" />
    //     </div>

    //   <div className=" bg-gray-200 m-5 p-10 ">
    //     <Heatmap xLabels={xLabels} yLabels={yLabels} data={data} squares />
    //   </div>
    // </div>
  );
}

export default UserDetail;
