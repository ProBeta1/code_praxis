import React from "react";
import { Link, Switch, Route } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/home"
        >
          CF Details
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/problems"
        >
          Problem Set
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/duel"
        >
          Code Duel
        </Link>
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/all"
        >
          All Problems
        </Link>
        {/* <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/bookmark"
        >
          BookMark
        </Link> */}
        <Link
          className="bg-gray-700 inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-300 font-semibold"
          to="/discuss"
        >
          Discuss
        </Link>
      </nav>
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

export default Nav;
