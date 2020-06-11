import React, { useState, useEffect } from "react";
import postProblem from "../services/postProblem";

function Bookmark() {

  // const [problemName, setProblemName] = useState("none");
  // const [problemUrl, setProblemUrl] = useState("noo");

  // const [submit, setSubmit] = useState(false);
  // const [response, setResponse] = useState("");
  // const handleChangeName = (event) => {
  //   setProblemName(event.target.value);
  // }
  // const handleChangeUrl = (event) => {
  //   setProblemUrl(event.target.value);
  // }

  // const postTheProblem = async (tmp) => {
  //   let res = postProblem.postIt(tmp);
  //   setResponse(res);
  // }

  // useEffect(()=>{

  //   const tmp = {
  //     "name":{problemName},
  //     "url":{problemUrl}
  //   }

  //   postTheProblem(tmp);

  //   setSubmit(false);
  // },[])



  return (
    <div className="bg-gray-600 w-1/2 h-1/3">
      {/* <form onSubmit={setSubmit(true)}>
        <label>
          Problem Name :<br></br>
          <input type="text" name="problem"  />
        </label>
        <label>
          Problem Link :<br></br>
          <input type="text" name="problem"  />
        </label>
      </form>
      <div>
        {response}
      </div> */}
    </div>
  );
}

export default Bookmark;
