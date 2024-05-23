import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/myposts">My Posts</Link>
      </div>
      <span>Logged in as: {user.name}</span>
    </nav>
  );
};

export default Navbar;
