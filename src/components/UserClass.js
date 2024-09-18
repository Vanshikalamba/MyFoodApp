import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { count: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer class");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    //const { count } = this.state;
    return console.log("render called");
  }
}
export default UserClass;
