import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { signin, signInWithGoogle } from "../helpers/auth";
import { auth } from "../services/firebase";
import UserDetail from "./UserDetail";

function Signup() {
  const [error, setError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <div className="flex  items-center  h-screen " style={{paddingLeft: 700, backgroundColor: "#69727C"}}>
          <button onClick={googleSignIn} type="button" class="btn btn-default btn-lg">
            Sign Up with Google
          </button>
      </div>
  );
}

export default Signup;
