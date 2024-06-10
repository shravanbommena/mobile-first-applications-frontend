import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  const isLoggedIn = localStorage.getItem("token") !== null;

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl">
          Home
        </Link>
        <div>
          <Link to="/people" className="text-white mr-4">
            People
          </Link>
          <button onClick={handleLogout} className="text-white">
            {isLoggedIn && "Logout"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
