import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { TaggedContentCard } from "react-ui-cards";
import one from "../images/1.gif";
import two from "../images/2.gif";
import three from "../images/3.gif";
import four from "../images/4.gif";
import five from "../images/5.gif";
import six from "../images/6.gif";
import seven from "../images/7.gif";
import eight from "../images/8.gif";

import '../assets/icheck-bootstrap.min.css';
import '../assets/fontawesome-free/css/all.min.css';
import '../assets/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../assets/jqvmap/jqvmap.min.css';
import '../assets/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../assets/daterangepicker/daterangepicker.css';
import '../assets/summernote/summernote-bs4.css';
import '../assets/dist/css/adminlte.min.css';
//import rest images and set them accordingly


function ProblemSet(props) {
  const [problemSetNumber, setProblemSetNumber] = useState(1);
  return (
    <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
    <aside class="main-sidebar sidebar-dark-primary elevation-4"> */}
      
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
          <Link to="/dashboard" class="d-block" style={{fontSize: 40,textAlign: "center", fontWeight: 40}}></Link>
          <Link to="/dashboard" class="d-block" style={{fontSize: 20,textAlign: "center", fontWeight: 20}}>{}</Link>
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
          <li class="nav-item menu-open">
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
            <h1 class="m-0 text-dark">ProblemSet</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Problem Set</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-600">
      <h2 className="flex text-4xl text-gray-200 justify-center font-extrabold tracking-wider">Problem Set {problemSetNumber}</h2>
      <div className="flex flex-wrap justify-center ">
        <Link to="/dpproblemset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Dynamic Programming"}
          thumbnail={one}
          description={"Ayush devised yet another scheme to set the password of his lock."}
          tags={["dp", "adhoc","medium"]}
        /></Link>
        <Link to="/datastructuresset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Data Structures"}
          thumbnail={two}
          description={"Ayush, Ashish and Vivek are busy preparing a new problem for the next Codeforces round ."}
          tags={["hard", "data structures"]}
        /></Link>
        <Link to="/stringsproblemset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Strings"}
          thumbnail={three}
          description={"STL may help maybe"}
          tags={["strings"]}
        /></Link>
        <Link to="/datastructuresset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Greedy"}
          thumbnail={four}
          description={"Can you think about the best solution ?"}
          tags={["greedy"]}
        /></Link>
        <Link to="/datastructuresset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Hashing"}
          thumbnail={five}
          description={"Map or what , try out"}
          tags={["hashing"]}
        /></Link>
        <Link to="/datastructuresset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Implementation"}
          thumbnail={six}
          description={"Adhoc always seem simpler than they actually are"}
          tags={["implementation","adhoc"]}
        /></Link>
        <Link to="/datastructuresset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Sortings"}
          thumbnail={seven}
          description={"Can you solve it "}
          tags={["sortings","searching"]}
        /></Link>
        <Link to="/datastructuresset"><TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"Games"}
          thumbnail={eight}
          description={"Game Theory Challenges"}
          tags={["games"]}
        /></Link>
        
      </div>
      <div class="row" style={{paddingLeft: 500, paddingTop: 50, paddingBottom: 50}}>
        <button class="btn btn-lg btn-warning inline-block border-l border-t border-r rounded-t py-3 px-10">More Categories</button>
      </div>
    </div>
    </div>
    </div>
    </body>
  );
}

export default ProblemSet;
