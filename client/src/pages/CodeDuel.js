import React, { useState } from "react";
import DuelCoder from "../components/DuelCoder";

function CodeDuel() {
  const [duelWinner, setDuelWinner] = useState("TBA");
  return (
    <div className="bg-gray-600  h-screen">

    <div className="flex justify-center mx-40 bg-red-200  p-2 text-5xl text-teal-400 font-mono">CODE DUEL</div>

      <div className="flex flex-row justify-center">
        <DuelCoder id={1} />
        <DuelCoder id={2} />
      </div>

      <div className="flex flex-wrap justify-center bg-gray-400  rounded-lg p-10 mx-40 text-4xl text-green-600">
        And the Winner is 
        <h3 className="mx-10 text-orange-500"> {duelWinner}</h3>
      </div>
    </div>
  );
}

export default CodeDuel;
