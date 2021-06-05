import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import { Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import About from "./pages/about";
const App: React.FC = function () {
  const [count, setCount] = useState(0);
  const k = 0;
  const location = useLocation();
  const h = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/a" children={<A />}></Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="mt-10">Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>

        <div
          className="App-link"
          onClick={() => {
            h.replace("/about");
          }}
        >
          Learn React
        </div>
        {" | "}
        <Link to="/a">
          <div className="App-link">Vite Docs</div>
        </Link>
      </header>
    </div>
  );
};

const A = () => {
  return <div>A</div>;
};
export default App;
