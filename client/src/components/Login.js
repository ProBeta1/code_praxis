import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import Header from "./Header";
import BackGround from "../images/giphy.gif";

// currently onlyLocalHost is configured for this
// update during deployment
function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div
      className="bg-repeat-round w-screen h-screen"
      style={{ backgroundImage: `url(${BackGround})` }}
    >
      <Header />
      <div>
        <div className="flex justify-center items-center h-64">
          <GoogleLogin
            clientId="338486217645-vhhggu1fnon448pu9iqick4bor3q3sq5.apps.googleusercontent.com"
            buttonText="Login to Code Praxis"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
