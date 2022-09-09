import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link to="login">
        <button className="login">Login Now</button>
      </Link>
      <Link to="signup">
        <button className="signup">Signup</button>
      </Link>
    </div>
  );
};

export default Home;
