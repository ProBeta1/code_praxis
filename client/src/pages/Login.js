import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import BackGround from "../images/giphy.gif";

// currently onlyLocalHost is configured for this
// update during deployment
function Login() {

  return (
    <div
      className="bg-repeat-round w-screen h-screen"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <div>
        <div className="flex justify-center items-center h-64">
          <GoogleLogin
            clientId="338486217645-vhhggu1fnon448pu9iqick4bor3q3sq5.apps.googleusercontent.com"
            buttonText="Login to Code Praxis"

            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;