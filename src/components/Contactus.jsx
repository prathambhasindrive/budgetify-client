import React, { useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className="contact-us  py-4">
      <div className="border-box px-2 mx-auto">
        <h2 className="text-4xl font-mono font-bold text-green-900 text-center mb-4">
          Get In Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center bg-[#e8cfe0] rounded-lg w-full p-4 md:w-[512px] md:mx-auto"
        >
          <div className=" px-4 flex flex-col justify-center items-start">
            <label htmlFor="name" className="text-xl text-green-800 mx-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-lg px-2 py-1"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className="my-2 px-4 flex flex-col justify-center items-start">
            <label htmlFor="email" className="text-xl text-green-800 mx-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-lg px-2 py-1"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="my-2 px-4 flex flex-col justify-center items-start">
            <label htmlFor="message" className="text-xl text-green-800 mx-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="rounded-lg px-2 py-1"
              placeholder="Enter Message"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </div>
          <div className="block text-center">
            <button
              type="submit"
              className="bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
