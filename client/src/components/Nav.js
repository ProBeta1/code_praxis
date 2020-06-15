import React from "react";
import { Link, Switch, Route } from "react-router-dom";

function Nav() {
  return (
    <body class="hold-transition sidebar-mini layout-fixed">
    {/* <div> */}
      {/* <nav>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/cfregister"
        >
          CF Details
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/problems"
        >
          Problem Set
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/duel"
        >
          Code Duel
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/all"
        >
          All Problems
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/discuss"
        >
          Discuss
        </Link>
      </nav>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
     */}
    <div class="wrapper">
     {/* <div>CODEPRAXIS</div> */}
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <Link to="/home" class="nav-link">Home</Link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <Link to="/dashboard" class="nav-link">Dashboard</Link>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <Link to="/signup" class="nav-link">Logout</Link>
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
    </nav>
</div>
</body>
  );
}

export default Nav;
