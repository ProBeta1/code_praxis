import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Discuss from "./pages/Discuss";
import Signup from "./pages/Signup";
import { auth } from "./services/firebase";
import PostTheProblems from "./pages/PostTheProblems";

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

  return (

    // made to just post problems on DB for now
    <PostTheProblems/>

    // actual pages
    
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Home}></Route>
    //     <PrivateRoute
    //       path="/discuss"
    //       authenticated={authenticated}
    //       component={Discuss}
    //     ></PrivateRoute>
    //     <PublicRoute
    //       path="/login"
    //       authenticated={authenticated}
    //       component={Signup}
    //     ></PublicRoute>
    //   </Switch>
    // </Router>
  );
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
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
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
          <Redirect to="/discuss" />
        )
      }
    />
  );
}

export default App;
