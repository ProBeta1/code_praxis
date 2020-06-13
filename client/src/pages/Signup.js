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
    <div className="flex flex-row bg-gray-400">
      <div className="flex flex-row ">
        <div className="flex w-full h-screen">
          <img
            src={"https://media3.giphy.com/media/Wsju5zAb5kcOfxJV9i/giphy.gif"}
            alt="cf"
            width={"100%"}
          />
        </div>

        <div className="flex w-full h-screen">
          <img
            src={
              "https://media0.giphy.com/media/B1uajA01vvL91Urtsp/giphy.gif?cid=ecf05e4795b4054bcfb64bf7735cab3dd1aad6fb03e9b000&rid=giphy.gif"
            }
            alt="cf"
            width={"100%"}
          />
        </div>
      </div>

      <div className="flex justify-end items-center bg-green-700  h-screen w-1/4">
        <div className="bg-red-400 rounded-full flex my-5 mx-2 my-1 p-5 text-gray-200 text-2xl font-mono">
          <button onClick={googleSignIn} type="button">
            Log In with Google
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 font-extrabold">
          C
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 font-extrabold">
          O
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 font-extrabold">
          D
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 font-extrabold">
          E
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 my-1 font-extrabold">
          P
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 my-1 font-extrabold">
          R
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 my-1 font-extrabold">
          A
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 my-1 font-extrabold">
          I
        </div>
        <div className="flex justify-center text-gray-200 bg-purple-600 w-16 h-16 items-center text-xl mx-2 my-1 my-1 font-extrabold">
          S
        </div>
      </div>
    </div>
  );
}

export default Signup;
