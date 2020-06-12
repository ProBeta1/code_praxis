import React, { useState, useEffect } from "react";
import postDpProblem from "../services/postDpProblem";


// function to post the problems tagwise from CF api to MongoDB
function PostTheProblems() {

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const postTheProblem = async (tmp) => {
    let res = postDpProblem.postIt(tmp);
    console.log(res);
  };

  useEffect(() => {
    // set the tag in the end of this URL
    fetch(proxyurl + "https://codeforces.com/api/problemset.problems?tags=dp")
      .then((response) => response.json())
      .then((item) => {
        let tmp = item["result"].problems;

        // uncomment this to post problems

        // for (let i = 0; i < tmp.length; i++) {
        //   let ob = tmp[i];

        //   const pack = {
        //     contestId: ob.contestId,
        //     name: ob.name,
        //     index: ob.index,
        //     rating: ob.rating,
        //   };

        //   postTheProblem(pack);
        // }
      })
      .catch((err) => console.log(err));

  }, []);

  return <div className="bg-gray-500"></div>;
}

export default PostTheProblems;
