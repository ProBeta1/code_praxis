import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
