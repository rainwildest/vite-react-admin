import React from "react";
import ReactDOM from "react-dom";
// import { Router, Route } from "react-router";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/about";
import NoMatch from "./pages/NoMatch";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch> */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
