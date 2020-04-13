import React from "react";
import "./App.css";
import CoronaState from "./context/CoronaState";
import Total from "./components/pages/Total";
import Header from "./components/layout/Header";

function App() {
  return (
    <CoronaState>
      <div className=" App">
        <Header />
        <Total />
      </div>
    </CoronaState>
  );
}

export default App;
