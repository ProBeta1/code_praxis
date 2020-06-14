import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import '../assets/icheck-bootstrap.min.css';
import '../assets/fontawesome-free/css/all.min.css';
import '../assets/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../assets/jqvmap/jqvmap.min.css';
import '../assets/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../assets/daterangepicker/daterangepicker.css';
import '../assets/summernote/summernote-bs4.css';
import '../assets/dist/css/adminlte.min.css';

function Discuss() {
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [content, setContent] = useState("");
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);

  useEffect(async () => {
    setReadError(null);
    try {
      db.ref("chats").on("value", (snapshot) => {
        let chat = [];
        snapshot.forEach((snap) => {
          chat.push(snap.val());
        });
        setChats(chat);
      });
    } catch (err) {
      setReadError(err.message);
    }
  }, []);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setWriteError(null);
    try {
      await db.ref("chats").push({
        content,
        timestamp: Date.now(),
        email: user.email,
        uid: user.uid,
      });
      setContent("");
    } catch (err) {
      setWriteError(err.message);
    }
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
          <li class="nav-item">
            <Link to="/problems" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Problem Set
                <span class="right badge badge-danger"></span>
              </p>
            </Link>
          </li>
          <li class="nav-item has-treeview menu-open">
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
            <h1 class="m-0 text-dark">Discuss</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard v1</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 className="bg-red-500 text-3xl text-gray-200 font-mono mx-10 p-5 rounded-lg flex justify-center">
        WELCOME TO Discuss <br></br> Post all your CP queries here , and help out your
        buddies !
      </h2>

      <div className="bg-green-200 m-3">
        {chats.map((chat) => {
          return (
            <p className="flex justify-start mx-20 p-2 " key={chat.timestamp}>
              <div className="bg-purple-500 mx-10 my-2 p-3 text-gray-100 text-xl rounded-full">
                {" "}
                <strong>{chat.email}</strong> : {chat.content}
              </div>
            </p>
          );
        })}
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            className="border-blue-600 border-2"
            value={content}
            onChange={handleChange}
          ></input>
          {writeError ? <p>{writeError}</p> : null}
          <button
            className="rounded-full bg-green-400 text-xl text-gray-300 mx-2 px-2"
            type="submit"
          >
            Post
          </button>
        </form>
        <div>
          LoggedIn as: <strong>{user.email}</strong>
        </div>
      </div>
    </div>
    </div>
    </div>
    </body>
  );
}

export default Discuss;
