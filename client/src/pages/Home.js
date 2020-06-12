import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import ProblemSet from "./ProblemSet"
import UserDetail from "../components/UserDetail";
import CodeDuel from "./CodeDuel";
import Discuss from "./Discuss";
import AllProblems from "./AllProblems";
import Bookmark from "./Bookmark";
function Home() {
  return (
    <div className="App">
      <nav>
        <Link className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold" to="/home">Home</Link>
        <Link className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold" to="/dashboard">Dashboard</Link>
        <Link className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold" to="/problems">Problem Set</Link>
        <Link className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold" to="/duel">Code Duel</Link>
        <Link className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold" to="/all">All Problems</Link>
        <Link className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold" to="/bookmark">BookMark</Link>
        <Link className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold" to="/discuss">Discuss</Link>
      </nav>

      <Switch>
        <Route path="/home">
        </Route>
        <Route path="/dashboard">
          <UserDetail/>
        </Route>
        <Route exact path="/problems">
          <ProblemSet/>
        </Route>
        <Route exact path="/duel">
          <CodeDuel/>
        </Route>
        <Route exact path="/all">
          <AllProblems/>
        </Route>
        <Route exact path="/bookmark">
          <Bookmark/>
        </Route>
        <Route exact path="/discuss">
          <Discuss/>
        </Route>
      </Switch>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>

    </div>
  );
}

export default Home;
