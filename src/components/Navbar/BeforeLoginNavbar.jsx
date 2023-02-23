import React from "react";
import { Link } from "react-router-dom";

function BeforeLoginNavbar() {
  return (
    <header className="py-2 px-4 flex justify-end items-center sticky t-0 z-10 overflow-hidden">
      <ul className="flex justify-end items-center">
        <Link to="/register" className="text-2xl mx-5 font-bold Link">
          <li>Register</li>
        </Link>
        <Link to="/login" className="text-2xl mx-5 font-bold Link">
          <li>Login</li>
        </Link>
      </ul>
    </header>
  );
}

export default BeforeLoginNavbar;
