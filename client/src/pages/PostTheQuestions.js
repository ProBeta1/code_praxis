import React, { useState, useEffect } from "react";
import postQuestions from "../services/postQuestions";
import { object } from "prop-types";


// function to post the problems tagwise from CF api to MongoDB
function PostTheQuestions() {

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const postTheProblem = async (tmp) => {
    let res = postQuestions.postIt(tmp);
    console.log(res);
  };

  useEffect(() => {
    // set the tag in the end of this URL
    fetch(proxyurl + "https://codeforces.com/api/problemset.problems")
      .then((response) => response.json())
      .then((item) => {
        let tmp = item["result"].problems;

        // uncomment this to post problems

    //     for (let i = 0; i < tmp.length; i++) {
    //       let ob = tmp[i];

    //       const pack = {
    //         contestId: ob.contestId,
    //         name: ob.name,
    //         index: ob.index,
    //         rating: ob.rating,
    //         tags: ob.tags,
    //       };

    //       postTheProblem(pack);
    //     }
    //   })
    //   .catch((err) => console.log(err));

  }, []);

  return <div className="bg-gray-500"></div>;
}

export default PostTheQuestions;
