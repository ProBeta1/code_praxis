import React,{useState, useEffect} from 'react'
import problemService from "../services/problemService";

function AllProblems() {
  const [problems, setProblems] = useState(null);

  const getProblems = async () => {
    let res = await problemService.getAll();
    setProblems(res);
  }

  useEffect( ()=>{
      if(!problems) 
      getProblems();
  },[])


  const renderProblem = problem => {
    return (
      <li className="bg-gray-300 mx-10 p-5">
        <h3 className="text-green-400 text-3xl">{problem.name}</h3>
        <p className="text-blue-500 text-xl my-3">{problem.url}</p>
      </li>
    );
  };

  return (
    <div className="">
      <ul className="list">
        {(problems && problems.length > 0) ? (
          problems.map(problem => renderProblem(problem)))
         : (
          <p>No problems found</p>
        )}
      </ul>
    </div>
  )
}

export default AllProblems
