import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import PieChart from "../components/PieChart";
import Stats from "./Stats";

let homeStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + "https://miro.medium.com/max/800/1*mWjv-mIg4gGw7vhj-uCyRw.jpeg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

function Home() {
  return (
    <Stats/>
    // <div className="flex w-full h-screen" style={ homeStyle}>

    // <PieChart/>

    //   <nav>
    //   <div class="row">
    //   <div class="col-md-6" style={{paddingLeft: 210, paddingTop: 300}}>
    //   <Link
    //       className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-4 px-40 text-blue-300 font-semibold"
    //       to="/signup"
    //       style={{fontSize: 40}}
    //     >
    //      Register
    //     </Link>
    //     </div>
    //     <div class="col-md-6" style={{paddingLeft: 200, paddingTop: 300}}>
    //     <Link
    //       className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-4 px-40 text-blue-300 font-semibold"
    //       to="/cfregister"
    //       style={{fontSize: 40}}
    //     >
    //       SignIn
    //     </Link>
    //     </div>
    //     </div>
    //     </nav>
    // </div>
  );
}

export default Home;
