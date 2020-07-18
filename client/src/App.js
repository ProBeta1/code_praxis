import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Discuss from "./pages/Discuss";
import Signup from "./pages/Signup";
import { auth } from "./services/firebase";
import CFRegister from "./pages/CFRegister";
import CodeDuel from "./pages/CodeDuel";
import Nav from "./components/Nav";
import UserDetail from "./pages/UserDetail";
import AllProblems from "./pages/AllProblems";
import ProblemSet from "./pages/ProblemSet";
import Home from "./pages/Home";
import Dpproblemset from "./pages/dpproblemset";
import Stringsproblemset from "./pages/stringsproblemset";
import Datastructuresset from "./pages/datastructuresset";
import { withRouter } from "react-router-dom";
import Stats from "./pages/Stats";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false);
      }
    });
  });

  const Main = withRouter(({ location }) => {
    return (
      <div>
        {location.pathname !== "/" && <Nav />}
        <Switch>
        <PublicRoute
            path="/home"
            authenticated={false}
            component={Home}
          ></PublicRoute>
          <PrivateRoute
            path="/cfregister"
            authenticated={authenticated}
            component={CFRegister}
          ></PrivateRoute>
          <PrivateRoute
            path="/duel"
            authenticated={authenticated}
            component={CodeDuel}
          ></PrivateRoute>
          <PrivateRoute
            path="/stats"
            authenticated={authenticated}
            component={Stats}
          ></PrivateRoute>
          <PrivateRoute
            path="/dashboard"
            authenticated={authenticated}
            component={UserDetail}
          ></PrivateRoute>
          <PrivateRoute
            path="/all"
            authenticated={authenticated}
            component={AllProblems}
          ></PrivateRoute>
          <PrivateRoute
            path="/problems"
            authenticated={authenticated}
            component={ProblemSet}
          ></PrivateRoute>
          {/* <PrivateRoute
            path="/bookmark"
            authenticated={authenticated}
            component={Bookmark}
          ></PrivateRoute> */}
          <PrivateRoute
            path="/discuss"
            authenticated={authenticated}
            component={Discuss}
          ></PrivateRoute>
          <PublicRoute
            path="/signup"
            authenticated={false}
            component={Signup}
          ></PublicRoute>
          <PrivateRoute
            path="/dpproblemset"
            authenticated={authenticated}
            component={Dpproblemset}
          ></PrivateRoute>
          <PrivateRoute
            path="/datastructuresset"
            authenticated={authenticated}
            component={Datastructuresset}
          ></PrivateRoute>
          <PrivateRoute
            path="/stringsproblemset"
            authenticated={authenticated}
            component={Stringsproblemset}
          ></PrivateRoute>
          <PublicRoute
            path="/"
            authenticated={false}
            component={Home}
          ></PublicRoute>
        </Switch>
      </div>
    );
  });

  return <Router>
    <Main/>
  </Router>;
}

//HOC
function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

//HOC
function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signup" />
        )
      }
    />
  );
}

export default App;
