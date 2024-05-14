import React, { useContext } from "react";
import {Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const { isOpen , toggleMenu ,isLogin , setIsLogin } = useContext(AppContext);

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");

    const url = "http://localhost:4343/api/v1/user/logout";
        
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include' // Ensure credentials are included
        })
        .then((response) => {
            if (!response.ok) {
                // If response is not ok, throw an error
                throw new Error("Network response was not ok from signup");
            }
            // Parse the JSON response
            return response.json();
        })
        .then((data) => {
            // Access the message from the response data
            console.log(data)
            const message = data.message;
            console.log("Success message:", message);
            setIsLogin(!isLogin);
            // Handle successful response
            // For example, redirect to a new page or show a success message
        })
        .catch((error) => {
            // Handle error, such as displaying an error message to the user
            console.error("Error in signup:", error);
        });
    
      
    
  };
  return (
    <>
      <nav className="bg-green-900 w-full h-12 flex items-center ">
        <div className="flex w-full justify-between items-center">
          <div className="text-white font-bold mx-2 my-1 text-2xl cursor-pointer animate-bounce">
            <Link to="/">Budgetify</Link>
          </div>

          <ul className="hidden md:flex border-box">
            <li className="text-white font-bold mx-2 my-1 hover:border-b-2 hover:border-white hover:border-solid">
              <NavLink to="/" >Home</NavLink>
            </li>
            <li className="text-white font-bold mx-2 my-1 hover:border-b-2 hover:border-white hover:border-solid">
              <NavLink to="/services" >Services</NavLink>
            </li>
            <li className="text-white font-bold mx-2 my-1 hover:border-b-2 hover:border-white hover:border-solid">
              <NavLink to="/about" >About Us</NavLink>
            </li>
            <li className="text-white font-bold mx-2 my-1 hover:border-b-2 hover:border-white hover:border-solid">
              <NavLink to="/contact" >Contact Us</NavLink>
            </li>
          </ul>

          <div>
            { isLogin ? (
              <button className="border-white border-2 border-solid font-bold px-2 py-1 mx-2 rounded-md text-white hover:bg-green-700 hidden  md:inline">
              <Link to="login" onClick={handleLogout} >Logout</Link>
            </button>
              
          ) : (
            <div> 
            <button className="border-white border-2 border-solid font-bold px-2 py-1 mx-2 rounded-md text-white hover:bg-green-700 hidden md:inline ">
              <Link to="/signup" >Sign Up</Link>
            </button>
            <button className="border-white border-2 border-solid font-bold px-2 py-1 mx-2 rounded-md text-white hover:bg-green-700 hidden  md:inline">
              <Link to="login" >Log In</Link>
            </button> 
            </div>
          )}
            
            <button
              className="border-white border-2 border-solid font-bold px-2 py-1 mx-2 rounded-md text-white hover:bg-green-700   md:hidden "
              onClick={toggleMenu}
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="menu md:hidden h-dvh w-full bg-gray-800 flex items-start justify-center px-4 py-4 text-white text-2xl text-center border-t-2 border-t-white">
          <ul>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink exact to="/" >Home</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/services" >Services</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/about" >About Us</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/contact" >Contact Us</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/signup" >Signup</NavLink>
            </li>
            <li className="my-6 px-2 py-4 hover:bg-[rgba(255,255,255,0.2)] hover:rounded-lg" onClick={toggleMenu}>
              <NavLink to="/login" >Login</NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
