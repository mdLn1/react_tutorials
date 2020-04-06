import React from "react";

export default class ClassComponent extends React.Component {
  render() {
    const {text} = this.props;
    return (
      <div style={{ backgroundColor: "red", color: "white" }}>
        {text || "Default value"}
      </div>
    );
  }
}
