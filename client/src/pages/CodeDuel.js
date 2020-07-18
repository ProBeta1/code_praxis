import React, { useState } from "react";

let homeStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/07/17/482606-global-winners-borys-minaiev-and-gennady-korotkevich.png" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

function CodeDuel() {


  return (
    <div className="bg-gray-600  h-screen flex justify-center items-center" style={ homeStyle}>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold flex justify-center w-64 h-32 items-center rounded" >
        <a href="https://code-dual.netlify.app/" target="_blank">Click Here to give it a shot</a>
      </button>

    </div>
  );
}

export default CodeDuel;
