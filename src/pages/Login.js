import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const Login = () => {
    const { isLogin , setIsLogin } = useContext(AppContext);
    const [login , setLogin ]  = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name , value } = e.target;
        setLogin((prevData)=>{
            return {
                ...prevData,
                [name] : value
            }
        })
        console.log(login)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "http://localhost:4343/api/v1/user/login";
        
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
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
    
        console.log(login);
        setLogin({
            email: '',
            password: ''
        });
    }

    const handleForgotPassword = (e) =>{
        e.preventDefault();
        const url = "http://localhost:4343/api/v1/user/resetPassword";
        
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(login),
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
            // Handle successful response
            // For example, redirect to a new page or show a success message
        })
        .catch((error) => {
            // Handle error, such as displaying an error message to the user
            console.error("Error in signup:", error);
        });
    
    }
    
  return (
    <section className="min-h-screen bg-gray-100 flex  justify-center items-center">
      <div className="bg-gray-200 md:bg-cyan-200 flex-row-reverse rounded-3xl shadow-lg w-4/6 flex md:w-4/6 md:mx-auto">
        <div className="flex flex-col bg-cyan-200 justify-center items-center w-full md:w-1/2 rounded-lg">
          <label className="mt-2 font-bold text-2xl">Login</label>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="mt-5">Email</label>
              <input
                className="rounded-lg p-2 mt-2"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                onChange={handleChange}
                value={login.email}
              />
            </div>
            <div className="flex flex-col">
              <label className="mt-3">Password</label>
              <input
                className="rounded-lg p-2 mt-2"
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
                onChange={handleChange}
                value={login.password}
              />
            </div>

            <div className="flex justify-center items-center">
              <input
                type="submit"
                className="shadow-lg flex items-center justify-center hover:bg-cyan-100 rounded-lg mt-5 mb-5 border-2 px-4 py-1 cursor-pointer mx-1"
                value="Login"
              />
              <input
                type="button"
                className="shadow-lg flex items-center justify-center hover:bg-cyan-100 rounded-lg mt-5 mb-5 border-2 px-4 py-1 cursor-pointer mx-1"
                value="Forgot Password"
                onClick={handleForgotPassword}
              />
            </div>
          </form>
        </div>
        <div className="w-1/2 sm:block hidden p-5 bg-cyan-100">
          <img
            className="rounded-3xl"
            src="\assets\images\login.jpg"
            alt=""
            
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
