import { useEffect } from "react";

const User = () => {
  useEffect(() => {
    const time = setInterval(() => {
      console.log("interval func");
    }, 1000);
    return () => {
      clearInterval(time);
      console.log("return use");
    };
  }, []);

  return (
    <div className="user-card">
      <h2>Name: Vanshika</h2>
      <h3>Location: Noida</h3>
    </div>
  );
};

export default User;
