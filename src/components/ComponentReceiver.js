import React from "react";

export default class ComponentReceiver extends React.Component {
  render() {
    const { ClassComponent, componentProps } = this.props;
    return (
      <div
        style={{ backgroundColor: "black", color: "white", padding: "2rem" }}
      >
        <ClassComponent {...componentProps} />
      </div>
    );
  }
}
