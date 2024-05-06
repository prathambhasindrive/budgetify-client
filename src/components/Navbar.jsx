import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-400 w-full h-12 flex items-center ">
      <div className="flex w-full justify-between items-center">
        <div className="text-white font-bold mx-2 my-1 text-2xl cursor-pointer">Budgetify</div>
        <ul className="hidden md:flex border-box">
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <a href="">Home</a>
          </li>
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <a href="">Services</a>
          </li>
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <a href="">About Us</a>
          </li>
          <li className="text-blue-900 font-bold mx-2 my-1 hover:border-b-2 hover:border-blue-900 hover:border-solid">
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div>
          <button className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500 hidden md:inline ">
            <a href="">Sign Up</a>
          </button>
          <button className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500  md:inline">
            <a href="">Log In</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
