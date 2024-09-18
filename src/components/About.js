import { useContext } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About Page</h1>
      <h2>{loggedInUser}</h2>
    </div>
  );
};

export default About;
