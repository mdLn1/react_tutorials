import React from "react";
import ClassComponent from "./components/ClassComponent";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent";
import FunctionalComponent from "./components/FunctionalComponent";

function App() {
  return (
    <div className="App" style={{ margin: "5rem auto", textAlign: "center" }}>
      <ClassComponent />
      <FunctionalComponent />
      <ArrowFunctionalComponent />
    </div>
  );
}

export default App;
