import React, { useState } from "react";
import icpc from "../images/icpc.jpg";
import { Link, Switch, Route } from "react-router-dom";
import '../assets/icheck-bootstrap.min.css';
import '../assets/fontawesome-free/css/all.min.css';
import '../assets/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
import '../assets/jqvmap/jqvmap.min.css';
import '../assets/overlayScrollbars/css/OverlayScrollbars.min.css';
import '../assets/daterangepicker/daterangepicker.css';
import '../assets/summernote/summernote-bs4.css';
import '../assets/dist/css/adminlte.min.css';
import '../assets/adminlte.min.css';

import postUser from "../services/postUser";
import { db } from "../services/firebase";
import { auth } from "../services/firebase";

function CFRegister() {
  const [user, setUser] = useState(auth().currentUser);
  const [handle, setHandle] = useState("");
  const [name, setName] = useState("");

  const [display, setDisplay] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeHandle = (event) => {
    setHandle(event.target.value);
  };

  const handleSubmit = async () => {

    db.ref("users/"+user.uid).set({
      username:name,
      handle:handle
    })
    setDisplay(true)
  };

  return (
    <body>
    <div className="flex w-full h-screen" style={{backgroundColor: "#69727C"}}>
      <div class="container-fluid">
      
        <div class="row"  style={{paddingLeft: 400, paddingTop: 100}}>
          
          <div class="col-md-8">
      <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">SIGNIN</h3>
              </div>
              
              <form class="form-horizontal" onSubmit={handleSubmit}>
                <div class="card-body">
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                      <input type="name" class="form-control" id="inputEmail3" placeholder="Name" onChange={handleChangeName}></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">CFhandle</label>
                    <div class="col-sm-10">
                      <input type="name" class="form-control" id="inputEmail3" placeholder="Handle" onChange={handleChangeHandle}></input>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="offset-sm-2 col-sm-10">
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck2"></input>
                        <label class="form-check-label" for="exampleCheck2">Remember me</label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="card-footer">
                  <button type="submit" class="btn btn-info">Sign in</button>
                  {/* <button type="submit" class="btn btn-default float-right">Cancel</button> */}
                </div>
               
              </form>
              {display && (
                <h3 className="flex">Congrats! We have configured this site for you . Enjoy </h3>
              )}
              
            </div>
            
    {/* <div className="flex flex-row "> */}
      {/* <div className="flex justify-start items-center bg-green-400 w-1/7 h-screen">
        <form className="m-3" onSubmit={handleSubmit}>
        <label>
            <p className="text-2xl my-4">Your precious name </p>
            <input type="text" name="name" onChange={handleChangeName} />
          </label>
          <label>
            <p className="text-2xl my-4">Your Codeforces Handle </p>
            <input type="text" name="handle" onChange={handleChangeHandle} />
          </label>

          <input
            className="m-3 p-2 bg-blue-400 text-bold font-mono"
            type="submit"
            value="Submit"
          />
        </form>
        {display && (
          <h3 className="flex">Congrats! We have configured this site for you . Enjoy </h3>
        )}
        </div> */}
    </div>
     </div>
     </div>
     </div>
     </body>
  );
}

export default CFRegister;
