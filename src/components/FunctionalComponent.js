import React from "react";

function FunctionalComponent(props) {
  const {text, name} = props;
  return (
    <div style={{ backgroundColor: "green", color: "white" }}>
      {text || "Default value"}
      {"\n"}
      {name || "No name for now"}
    </div>
  );
}

export default FunctionalComponent;
