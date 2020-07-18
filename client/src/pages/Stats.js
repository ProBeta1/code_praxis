import React, { useState, useEffect } from "react";
import SubmissionPieChart from "../components/SubmissionPieChart";

import { auth } from "../services/firebase";
import { db } from "../services/firebase";
import TagPieChart from "../components/TagPieChart";

const Stats = () => {
  const user = useState(auth().currentUser);
  const [handle, setHandle] = useState("prodelta");
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const [AC, setAC] = useState(1);
  const [WA, setWA] = useState(1);
  const [TLE, setTLE] = useState(1);
  const [MLE, setMLE] = useState(2);

  const [dp, setDp] = useState(0);
  const [greedy, setGreedy] = useState(0);
  const [dfs, setDfs] = useState(0);
  const [math, setMath] = useState(0);
  const [implementation, setImplementation] = useState(0);
  const [games, setGames] = useState(0);
  const [bf, setBf] = useState(0);

  const getHandle = async () => {
    try {
      let userId = user.uid;
      await db
        .ref("/users/" + userId)
        .once("value")
        .then(async function (snapshot) {
          let dx = snapshot.val() && snapshot.val().handle;

          setHandle(dx);
          await fetch(
            proxyurl +
              `https://codeforces.com/api/user.status?handle=${handle}&from=1&count=30`
          )
            .then((response) => response.json())
            .then((item) => {
              let tmp = item["result"];
              let ac = 0,
                tle = 0,
                mle = 0,
                wa = 0;
              let dp = 0,
                greedy = 0,
                dfs = 0,
                bf = 0,
                math = 0,
                games = 0,
                ip = 0;

              for (let i = 0; i < tmp.length; i++) {
                let ob = tmp[i];
                switch (ob.verdict) {
                  case "OK":
                    ac = ac + 1;
                    break;
                  case "WRONG_ANSWER":
                    wa = wa + 1;
                    break;
                  case "TIME_LIMIT_EXCEEDED":
                    tle = tle + 1;
                    break;
                  case "MEMORY_LIMIT_EXCEEDED":
                    mle = mle + 1;
                    break;
                }

                let tags = ob.problem.tags;
                for (let s in tags) {
                  switch (tags[s]) {
                    case "dp":
                      dp += 1;
                      break;
                    case "greedy":
                      greedy += 1;
                      break;
                    case "dfs and similar":
                      dfs += 1;
                      break;
                    case "math":
                      math += 1;
                      break;
                    case "implementation":
                      ip += 1;
                      break;
                    case "games":
                      games += 1;
                      break;
                    case "brute force":
                      bf += 1;
                      break;
                  }
                }
              }

              setAC(ac);
              setWA(wa);
              setMLE(mle);
              setTLE(tle);

              setDp(dp);
              setGreedy(greedy);
              setGames(games);
              setImplementation(ip);
              setBf(bf);
              setMath(math);
              setDfs(dfs);
            })
            .catch((err) => console.log(err));
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getHandle();
  }, []);

  return (
    <div className="bg-gray-600">
      <h2 className="text-5xl flex justify-center">Your Performance Details</h2>
      <SubmissionPieChart ac={AC} wa={WA} tle={TLE} mle={MLE} />
      <TagPieChart dp={dp} greedy={greedy} math={math} ip={implementation} dfs={dfs} games={games} bf={bf} />
    </div>
  );
};

export default Stats;
