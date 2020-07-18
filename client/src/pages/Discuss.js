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
import "../assets/adminlte.min.css";
import SidePanel from "../components/SidePanel";

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
        <SidePanel />

        <div class="content-wrapper">
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0 text-dark">Discuss</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Discuss</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="col-md-9" style={{ paddingLeft: 80 }}>
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h1 class="box-title">POST QUERIES</h1>
                  <div class="box-tools pull-right">
                    <div class="has-feedback"></div>
                  </div>
                </div>
                <div class="box-body np-padding">
                  <div class="mailbox-controls">
                    <div class="pull-right">
                      1-1/1
                      <div class="btn-group">
                        <button type="button" class="btn btn-default btn-sm">
                          <i class="fa fa-chevron-left"></i>
                        </button>
                        <button type="button" class="btn btn-default btn-sm">
                          <i class="fa fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive mailbox-messages">
                    <table class="table table-hover table-striped">
                      <tbody>
                        {chats.map((chat) => {
                          return (
                            <tr>
                              <td class="mailbox-star">
                                <a href="#">
                                  <i class="fa fa-star text-yellow"></i>
                                </a>
                              </td>
                              <td class="mailbox-name">
                                <a href="#">{chat.email}</a>
                              </td>
                              <td class="mailbox-subject">
                                <b></b>
                                {chat.content}
                              </td>
                              <td
                                class="mailbox-date"
                                key={chat.timestamp}
                              ></td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="box-footer no-padding" style={{ paddingTop: 20 }}>
                  <div>
                    <div class="pull-right" style={{ paddingLeft: 600 }}>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text-area"
                          className="border-blue-600 border-2"
                          value={content}
                          onChange={handleChange}
                        ></input>
                        {writeError ? <p>{writeError}</p> : null}
                        <button
                          type="button"
                          class="btn btn-warning btn-lg inline-block border-l bi=order-r border-t"
                        >
                          Send
                        </button>
                        <div>
                          LoggedIn as: <strong>{user.email}</strong>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Discuss;
