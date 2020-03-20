import React from "react";
import "./App.css";
import CoronaState from "./context/CoronaState";
import Total from "./components/pages/Total";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePages from "./components/pages/Single-pages";
import Header from "./components/layout/Header";

function App() {
  return (
    <CoronaState>
      <Router>
        <div className=" App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Total} />
              <Route exact path="/:slug" component={SinglePages} />
              <Route exact path="/province/:slug" component={SinglePages} />
            </Switch>
          </div>
        </div>
      </Router>
    </CoronaState>
  );
}

export default App;
