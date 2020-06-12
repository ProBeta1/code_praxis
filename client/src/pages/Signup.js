import React, { useState } from "react";
import { signin, signInWithGoogle } from "../helpers/auth";

function Signup() {
  const [error, setError] = useState("");

  const googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col bg-gray-600 h-screen justify-center items-center">
      <p className="flex justify-center text-5xl text-green-500">Lets Authenticate you right now  !</p>
      <div className="bg-red-400 rounded-full flex my-5 mx-20 p-5 w-1/4 text-gray-200 text-2xl font-mono">
        <button onClick={googleSignIn} type="button">
          Log In with Google
        </button>
      </div>
    </div>
  );
}

export default Signup;
