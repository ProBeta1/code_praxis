import React, { useState } from "react";
import icpc from "../images/icpc.jpg";

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
    <div className="flex flex-row ">
      <div className="flex justify-start items-center bg-green-400 w-1/7 h-screen">
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
      </div>

      <div className="flex w-full h-screen">
        <img src={icpc} alt="cf" />
      </div>
    </div>
  );
}

export default CFRegister;
