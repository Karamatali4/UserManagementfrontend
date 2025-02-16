import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-[50rem] h-[3rem] bg-cyan-700 mx-auto rounded-md mb-5">
      <ul className="text-white font-bold flex  h-[100%] items-center gap-5 justify-center">

        <li className="bg-cyan-600 rounded-lg px-3 py-1 hover:bg-cyan-500 duration-150"><Link to="/">Home</Link></li>
        <li className="bg-cyan-600 rounded-lg px-3 py-1 hover:bg-cyan-500 duration-150"><Link to="/users">Users Detail</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
