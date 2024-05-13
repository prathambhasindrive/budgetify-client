import React, { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [signup, setSignup] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
    console.log(user);
  };
  const handleOTP = (e) => {
    e.preventDefault();
    console.log(user);

    const url = "http://localhost:4343/api/v1/user/sendOTP"; // Replace with your backend endpoint URL

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Handle successful response
        // For example, redirect to a new page or show a success message
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, such as displaying an error message to the user
      });

    // Reset the user state after form submission
    // setUser({
    //   firstname: "",
    //   lastname: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // });

    setSignup(true);
  };
  const handleSignup = (e) => {
    e.preventDefault();

    const url = "http://localhost:4343/api/v1/user/signup"; // Replace with your backend endpoint URL

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok from signup");
        }
        // Handle successful response
        // For example, redirect to a new page or show a success message
      })
      .catch((error) => {
        console.error("Error in signup :", error);
        // Handle error, such as displaying an error message to the user
      });

    // Reset the user state after form submission
    setUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      otp: "",
    });
    setSignup(false);
  };

  return (
    <section className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-gray-200 md:bg-cyan-200 rounded-3xl shadow-lg w-4/6 flex md:w-4/6 md:mx-auto">
        <div className="flex flex-col bg-cyan-200 justify-center items-center w-full md:w-1/2 rounded-lg">
          <label className="mt-2 font-bold text-2xl">Signup</label>
          <form className="flex flex-col">
            <div className="flex flex-col">
              <label className="mt-5">First Name</label>
              <input
                className="rounded-lg p-2 mt-2"
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                onChange={handleChange}
                value={user.firstname}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mt-3">Last Name</label>
              <input
                className="rounded-lg p-2 mt-2"
                type="text"
                name="lastname"
                placeholder="Enter your last name"
                onChange={handleChange}
                value={user.lastname}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mt-3">Email ID</label>
              <input
                className="rounded-lg p-2 mt-2"
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mt-3">Password</label>
              <input
                className="rounded-lg p-2 mt-2"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mt-3">Confirm Password</label>
              <input
                className="rounded-lg p-2 mt-2"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
                value={user.confirmPassword}
                required
              />
            </div>
            {signup && (
              <input
                type="text"
                name="otp"
                className="rounded-lg p-2 mt-2"
                onChange={handleChange}
                value={user.otp}
                placeholder="Enter Your 6 Digit OTP "
              />
            )}
            <div className="flex flex-col justify-center items-center">
              {signup ? (
                <input
                type="submit"
                  className="shadow-lg flex items-center justify-center hover:bg-cyan-100 rounded-lg w-6/12 h-6 mt-5 mb-5 border-2"
                  value="SignUp"
                  onClick={handleSignup}
                  
                />
              ) : (
                <input type="submit" className="shadow-lg flex items-center justify-center hover:bg-cyan-100 rounded-lg w-6/12 h-6 mt-5 mb-5 border-2" onClick={handleOTP} value="Send OTP" />
                  
                
              )}
            </div>
          </form>
        </div>
        <div className="w-1/2 sm:block hidden p-5 bg-cyan-100">
          <img
            className="rounded-3xl"
            src="\assets\images\investment-portfolio-feature.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
