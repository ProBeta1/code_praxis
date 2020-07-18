import React from "react";
import { Link, Switch, Route } from "react-router-dom";

function SidePanel() {
  return (
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
  );
}

export default SidePanel;
