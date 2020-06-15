import React,{useState, useEffect} from 'react'
import { Link, Switch, Route } from "react-router-dom";
import dsService from "../services/dsService";
import '../assets/icheck-bootstrap.min.css';
import '../assets/fontawesome-free/css/all.min.css';
import '../assets/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../assets/jqvmap/jqvmap.min.css';
import '../assets/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../assets/daterangepicker/daterangepicker.css';
import '../assets/summernote/summernote-bs4.css';
import '../assets/dist/css/adminlte.min.css';

function Dpproblemset() {
  const [data_structures, setdata_structures] = useState(null);

  const getdsProblems = async () => {
    let res = await dsService.getAll();
    setdata_structures(res);
  }

  useEffect( ()=>{
      if(!data_structures)
      getdsProblems();   
  },[])
  

  const renderdsProblem = dsproblem => {
    return (
      <tr>
       <td>{dsproblem.name}</td>
       <td>{dsproblem.index}</td>
       <a href="https://codeforces.com/problemset/problem/1365/G"><td>Solve</td></a>
       {/* <td>{dpproblem.contestId}</td> */}
       {/* <a href="https://codeforces.com/problemset/problem/${dpproblem.contestId}/${dpproblem.index}"><td>Solve</td></a> */}
     </tr>
    );
  };

  return (
    <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
    {/* <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <Link href="/home" class="nav-link">Home</Link>
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
          {/* <img src={} class="img-circle elevation-2" alt="image" style={{width : 180, height: 180, padding : 10}}></img> */}
          </div>
          <a href="#" class="d-block" style={{fontSize: 40,textAlign: "center", fontWeight: 40}}>{}</a>
          <a href="#" class="d-block" style={{fontSize: 20,textAlign: "center", fontWeight: 20}}>{}</a>
        </div>
      </div>

      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
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
            <h1 class="m-0 text-dark">Data Structures Questions</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Data Structures Questions</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <div class="row" style={{paddingLeft: 40}}>
    <div class="col-md-12"  style={{paddingRight: 25}}>

<div class="card">
              <div class="card-header">
                <h3 class="card-title">Problems</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style={{width: 150}}>
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search"></input>

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap table-striped ">
                  <thead>
                    <tr>
                      <th>Problem Name</th>
                      <th>Problem Index</th>
                      <th>Problem Link</th>
                    </tr>
                  </thead>
                  <tbody>
                  {(data_structures && data_structures.length > 0) ? (
                   data_structures.map(dsproblem => renderdsProblem(dsproblem)))
                   : (
                   <p>No problems found</p>
                     )}
                    {/* <tr className="tdprob"> */}
                      {/* <td></td> */}
                      {/* <td><span class="tag tag-success">Approved</span></td> */}
                      {/* <td></td> */}
                    {/* </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
    </div>
            </div>
            </div>
    </div>
    </body>
    // <div className="">
    //   <ul className="list">
    //     {(problems && problems.length > 0) ? (
    //       problems.map(problem => renderProblem(problem)))
    //      : (
    //       <p>No problems found</p>
    //     )}
    //   </ul>
    // </div>
  )
}

export default Dpproblemset
