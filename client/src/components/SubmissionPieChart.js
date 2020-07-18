import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryTheme } from "victory";

const SubmissionPieChart = (props) => {
  const [data, setData] = useState([
    { x: "Fetching ..", y: 100 },

  ]);
  const packData = [
    { x: "AC", y: props.ac },
    { x: "WA", y: props.wa },
    { x: "TLE", y: props.tle },
    { x: "MLE", y: props.mle }
  ]

  useEffect(() => {
    setData(packData);
  }, [props.ac,props.wa]);

  return (
    <div style={{width:500, height:500, padding:40 , marginLeft:'35%'}}>
      <VictoryPie
        innerRadius={({ datum }) => datum.y * 5}
        animate={{
          duration: 5000,
        }}
        colorScale={["#90EE90", "tomato", "orange", "gold", "cyan", "navy"]}
        data={data}
        theme={VictoryTheme.material}
        style={{ labels: {fill:"white", fontSize: 20, fontWeight: "bold" } }}
      />
    </div>
  );
};

export default SubmissionPieChart;
