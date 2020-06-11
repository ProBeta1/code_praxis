import React, { useState } from "react";
import Timer from "react-compound-timer";
import { Redirect } from "react-router-dom";


function DuelCoder(props) {
  const [winnerName, setWinnerName] = useState("Dubu");
  const [id, setId] = useState(props.id);
  const [challenge, setChallenge] = useState(
    "https://codeforces.com/problemset/problem/1365/G"
  );


  return (
    <div className="bg-gray-400 w-1/3 rounded-lg p-10 m-10">
      <div>
        <form>
          <label>
            Participant {id} :
            <br></br>
            <input type="text" name="name" />
          </label>
        </form>
      </div>

      <div>
        <Timer startImmediately={false}>
          {({ start, resume, pause, stop, reset, timerState }) => (
            <React.Fragment>
              <div className="flex flex-wrap justify-center">
                <div className="bg-green-400 w-5 h-7 my-4 flex mx-1 justify-center">
                  <Timer.Days />{" "}
                </div>
                <div className="bg-green-400 w-5 h-7 my-4 flex mx-1 justify-center">
                  <Timer.Hours />{" "}
                </div>{" "}
                <div className="bg-green-400 w-5 h-7 my-4 flex mx-1 justify-center">
                  <Timer.Minutes />{" "}
                </div>
                <div className="bg-green-400 w-5 h-7 my-4 flex mx-1 justify-center">
                  <Timer.Seconds />{" "}
                </div>{" "}
              </div>
              <br />
              <div className="flex flex-wrap bg-blue-500 rounded-full justify-center">
                <a className="text-gray-200 font-bold p-1" href={challenge} target="_blank" onClick={start}>START</a>
              </div>
            </React.Fragment>
          )}
        </Timer>{" "}
      </div>

    </div>
  );
}

export default DuelCoder;
