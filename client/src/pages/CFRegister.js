import React, { useState } from "react";
import icpc from "../images/icpc.jpg"

function CFRegister() {
  const [handle, setHandle] = useState("");

  const handleChange = (event) => {
    setHandle(event.target.value);
  };

  const handlSubmit = () => {
    //post api
  };

  return (
    <div className="flex flex-row ">
      <div className="flex justify-start items-center bg-green-400 w-1/7 h-screen">
        <form className="m-3">
          <label>
            <p className="text-3xl m-4">Codeforces Handle </p> 
            <input type="text" name="handle" onChange={handleChange} />
          </label>

          <input className="m-3 p-2 bg-blue-400 text-bold font-mono" type="submit" value="Submit" />
        </form>
      </div>

      <div className="flex w-full h-screen">
        <img src={icpc} alt="cf" />
      </div>
    </div>
  );
}

export default CFRegister;
