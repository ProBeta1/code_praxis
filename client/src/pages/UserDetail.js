import React, { useState, useEffect } from "react";
import Heatmap from "react-heatmap-grid";
import { auth } from "../services/firebase";
import { db } from "../services/firebase";
//piechart

function UserDetail() {

  const [user, setUser] = useState(auth().currentUser);
  const [handle, setHandle] = useState("");
  const [name, setName] = useState("");
  const [readError, setReadError] = useState(null);
  const [rating, setRating] = useState();
  const [country, setCountry] = useState("");
  const [rank, setRank] = useState();
  const [maxRating, setMaxRating] = useState();
  const [maxRank, setMaxRank] = useState("");
  const [org, setOrg] = useState("");
  const [avatar, setAvatar] = useState("");

  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    setReadError(null);

    const getIt = async () => {
      console.log(user.uid);
      try {
        let userId = user.uid;
        await db
          .ref("/users/" + userId)
          .once("value")
          .then(function (snapshot) {
            let username =
              (snapshot.val() && snapshot.val().username) || "Anonymous";
            let handle = (snapshot.val() && snapshot.val().handle) || "tourist";
            setHandle(handle);
            setName(username);
            fetch(
              proxyurl +
                `https://codeforces.com/api/user.info?handles=${handle}`
            )
              .then((response) => response.json())
              .then((item) => {
                let tmp = item["result"][0];
                console.log(tmp)
                setCountry(tmp.country);
                setRating(tmp.rating);
                setAvatar(tmp.avatar);
                setMaxRating(tmp.maxrating);
                setRank(tmp.rank);
                setMaxRank(tmp.maxRank);
                setOrg(tmp.organization);
                
              })
              .catch((err) => console.log(err));            
          });
          
      } catch (err) {
        setReadError(err.message);
      }
    };

    getIt();
  }, []);

  const xLabels = new Array(31).fill(0).map((_, i) => ``);
  const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <div className="bg-gray-600">
      Name:{name}
      Rating:{rating}
      Rank:{rank}
      maxRating:{maxRating}
      maxRank:{maxRank}
        <div className="">
          <img src={avatar} alt="image" />
        </div>

      <div className=" bg-gray-200 m-5 p-10 ">
        <Heatmap xLabels={xLabels} yLabels={yLabels} data={data} squares />
      </div>
    </div>
  );
}

export default UserDetail;
