import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log("Child Class Constructor");
  }

  render() {
    const { name, location, linkedinUrl } = this.props;
    console.log("Child Class Body");

    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          Increase Count
        </button>
        <p>Name : {name}</p>
        <p>Location: {location}</p>
        <p>
          LinkedIn Id:{" "}
          <a href={linkedinUrl} target="_blank">
            {linkedinUrl}
          </a>
        </p>
      </div>
    );
  }

  componentDidMount() {
    console.log("Child Component Mounted");
  }
}

export default UserClass;
