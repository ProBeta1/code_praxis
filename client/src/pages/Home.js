import React from "react";
import icpc from "../images/icpc.jpg";
import { Link, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <div className="flex w-full h-screen" style={{backgroundColor: "#69727C"}}>
      {/* <h1><strong>CODE PRAXIS</strong></h1> */}
      {/* <img src={icpc} alt="cf" />  */}
      <nav>
      <div class="row">
      <div class="col-md-6" style={{paddingLeft: 210, paddingTop: 300}}>
      <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-4 px-40 text-blue-300 font-semibold"
          to="/signup"
          style={{fontSize: 40}}
        >
         Register
        </Link>
        </div>
        <div class="col-md-6" style={{paddingLeft: 200, paddingTop: 300}}>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-4 px-40 text-blue-300 font-semibold"
          to="/cfregister"
          style={{fontSize: 40}}
        >
          SignIn
        </Link>
        </div>
        </div>
        </nav>
    </div>
  );
}

export default Home;
