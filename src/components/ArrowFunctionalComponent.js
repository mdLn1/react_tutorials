import React from "react";

const ArrowFunctionalComponent = (props) => {
  const {text} = props;
  return (
    <div style={{ backgroundColor: "yellow", color: "black" }}>
    {text || "Default value"}
    </div>
  );
};

export default ArrowFunctionalComponent;
