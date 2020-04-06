import React from "react";
import ClassComponent from "./components/ClassComponent";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import Navbar from "./components/Navbar";
import ComponentReceiver from "./components/ComponentReceiver";

function App() {
  return (
    <div className="App" style={{ margin: "0 auto", textAlign: "center" }}>
      <Navbar>
        <ClassComponent text={"I am a class Component"} />
        <FunctionalComponent text={"I am an functional component"} />
        <ArrowFunctionalComponent
          text={" I am an arrow functional component"}
        />
      </Navbar>
      <ComponentReceiver ClassComponent={FunctionalComponent} 
      componentProps={{text: "I am an functional component", name: "This is my name"}}/>
    </div>
  );
}

export default App;
