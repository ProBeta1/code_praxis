import React, { useState } from "react";
import Heatmap from "react-heatmap-grid";

//piechart 

function UserDetail() {
  const defaultDetails = {
    name: "Tzuyu",
    rating: "4500",
    Organisation: "TWICE",
    wuba: "luba",
    duba: "cuba",
  };
  const [details, setDetails] = useState(defaultDetails);
  const [profilePic, setProfilePic] = useState(
    "https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
  );

  const xLabels = new Array(31).fill(0).map((_, i) => ``);
  const yLabels = ["Sun", "Mon", "Tue","Wed","Thus","Fri","Sat"];
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    );

  return (
    <div className="bg-gray-600">
      <div className="flex">
        <div className="bg-gray-300 rounded-lg w-1/2 h-64 m-10 p-10">
          {Object.keys(details).map((key) => (
            <p>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
              {`${details[key]}`}
            </p>
          ))}{" "}
        </div>

        <div className="bg-gray-300 rounded-full w-1/4 h-1/4 m-10 p-12">
          <img src={profilePic} alt="image" />
        </div>
      </div>

      <div className=" bg-gray-200 m-5 p-10 ">
        <Heatmap xLabels={xLabels} yLabels={yLabels} data={data} squares/>
      </div>
    </div>
  );
}

export default UserDetail;
