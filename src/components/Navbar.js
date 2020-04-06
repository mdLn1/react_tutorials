import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            marginBottom: "2rem",
          }}
        >I am the navigation bar component</div>
        {this.props.children}
      </div>
    );
  }
}
