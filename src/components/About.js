import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <UserClass name="Anshul" />
      </div>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <User name="Anshul" />
//       <UserClass name="Anshul" />
//     </div>
//   );
// };

// export default About;
