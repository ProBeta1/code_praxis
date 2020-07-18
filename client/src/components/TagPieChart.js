import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryTheme } from "victory";

const TagPieChart = (props) => {
  const [data, setData] = useState([
    { x: "Fetching ..", y: 100 },

  ]);
  const packData = [
    { x: "DP", y: props.dp+1 },
    { x: "Greedy", y: props.greedy+1 },
    { x: "DFS", y: props.dfs+1 },
    { x: "Games", y: props.games+1 },
    { x: "Implementation", y: props.ip+1 },
    { x: "Maths", y: props.math+1 },
    { x: "Brute Force", y: props.bf+1 },

  ]

  useEffect(() => {
    setData(packData);
  }, [props.dp, props.greedy]);

  return (
    <div style={{width:500, height:500, padding:40, marginLeft:'35%'}}>
      <VictoryPie
        innerRadius={50}
        animate={{
          duration: 3000,
        }}
        colorScale={["tomato", "#90EE90", "gold", "cyan", "navy", "red","violet"]}
        data={data}
        theme={VictoryTheme.material}
        style={{ labels: { fill:"white", fontSize: 12, fontWeight: "bold" } }}
      />
    </div>
  );
};

export default TagPieChart;
