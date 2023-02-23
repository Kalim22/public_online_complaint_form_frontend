import React from "react";
import { Link } from "react-router-dom";

function MlaNavbar({ logOut }) {
  return (
    <>
      <header className="py-2 px-4 flex justify-end items-center sticky t-0 z-10">
        <ul className="flex justify-end items-center">
          {/* <Link to="/" className="text-2xl mx-5 font-bold Link">
            <li>Request List</li>
          </Link> */}
          <li className="text-2xl mx-5 font-bold Link" onClick={logOut}>
            Logout
          </li>
        </ul>
      </header>
    </>
  );
}

export default MlaNavbar;
