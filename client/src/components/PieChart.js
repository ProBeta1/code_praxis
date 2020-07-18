import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryTheme } from "victory";

const PieChart = (props) => {
    console.log("in pie " +props.data)
  const [data, setData] = useState([
    { x: "No problem Solved", y: 100 },

  ]);


  useEffect(() => {
    setData(props.Data);
  }, []);

  return (
    <div style={{width:500, height:500, padding:40}}>
      <VictoryPie
        cornerRadius={({ datum }) => datum.y * 5}
        animate={{
          duration: 100,
        }}
        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
        data={data}
        theme={VictoryTheme.material}
        // style={{ labels: { fill: "white", fontSize: 28, fontWeight: "bold" } }}
      />
    </div>
  );
};

export default PieChart;
