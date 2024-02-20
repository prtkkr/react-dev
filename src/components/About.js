import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       {/* <User
//         name={"Pratik Kumar"}
//         location={"Pune(MH), India"}
//         linkedIn={"https://www.linkedin.com/in/kr-pratik/"}
//       /> */}
//       <UserClass
//         name={"Dev User"}
//         location={"Sahibganj(JH), India"}
//         linkedinUrl={"https://www.linkedin.com/in/kr-pratik/"}
//       />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Class Constructor");
  }

  render() {
    console.log("Parent Class Body");
    return (
      <div>
        <h1>About Us</h1>
        <UserClass
          name={"Dev User"}
          location={"Sahibganj(JH), India"}
          linkedinUrl={"https://www.linkedin.com/in/kr-pratik/"}
        />
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent Component Mounted");
  }
}

export default About;
