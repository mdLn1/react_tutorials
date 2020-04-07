import React from "react";

class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleClick2 = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick2}> Please Click me</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <StateComponent />
      <StateComponent />
    </div>
  );
}

export default App;
