import React from "react";
import hooks from "./hooks";
class LifecycleHooks extends React.Component {
  state = {
    name: "s7works Organization",
  };
  constructor() {
    console.log("parent class constructor");
    super();

    this.state = {
      name: "s7works Organization",
    };
  }
  componentWillMount() {
    //componentWillMount life cycle hook will execute after constructor

    console.log("parent class componentWillMount");
    if (window.innerWidth < 800) {
      this.setState({
        innerWidth: window.innerWidth,
      });
    }
  }

  render() {
    //render() function will execute after componentWillMount

    console.log("parent render");
    return (
      <div>
        <p>{this.state.name}</p>
        <br></br>
        <br></br>
        <p>{this.state.innerWidth}</p>
        <br></br>

        <hooks name={this.state.name}></hooks>
        <br></br>
        <button onClick={this.changeState}>Change </button>
      </div>
    );
  }

  changeState = () => {
    this.setState({
      name: "reactjs",
    });
  };

  componentDidMount() {
    //if component rendered successfully, then only this life cycle hook will execute

    console.log("parent componentDidMount");
  }

  componentWillReceiveProps() {
    console.log("parent componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
}
export default LifecycleHooks;
