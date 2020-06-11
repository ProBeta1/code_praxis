import React, { useState } from "react";
import { TaggedContentCard } from "react-ui-cards";
import one from "../images/1.gif";
import two from "../images/2.gif";
import three from "../images/3.gif";
import four from "../images/4.gif";
//import rest images and set them accordingly


function ProblemSet(props) {
  const [problemSetNumber, setProblemSetNumber] = useState(1);
  return (
    <div className="bg-gray-600">
      <h2 className="flex text-4xl text-gray-200 justify-center font-extrabold tracking-wider">Problem Set {problemSetNumber}</h2>
      <div className="flex flex-wrap justify-center ">
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"G. Secure Password"}
          thumbnail={one}
          description={"Ayush devised yet another scheme to set the password of his lock."}
          tags={["dp", "adhoc","medium"]}
        />
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"F. Swaps Again "}
          thumbnail={two}
          description={"Ayush, Ashish and Vivek are busy preparing a new problem for the next Codeforces round ."}
          tags={["hard", "greedy"]}
        />
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"haha"}
          thumbnail={three}
          description={"pr kyun"}
          tags={["lol", "wow"]}
        />
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"haha"}
          thumbnail={four}
          description={"pr kyun"}
          tags={["lol", "wow"]}
        />
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"haha"}
          thumbnail={two}
          description={"pr kyun"}
          tags={["lol", "wow"]}
        />
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"haha"}
          thumbnail={two}
          description={"pr kyun"}
          tags={["lol", "wow"]}
        />
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"haha"}
          thumbnail={two}
          description={"pr kyun"}
          tags={["lol", "wow"]}
        />
        <TaggedContentCard
          href={"https://codeforces.com/problemset/problem/1365/G"}
          title={"haha"}
          thumbnail={two}
          description={"pr kyun"}
          tags={["lol", "wow"]}
        />
      </div>
    </div>
  );
}

export default ProblemSet;
