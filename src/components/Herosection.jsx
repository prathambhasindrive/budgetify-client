import React from "react";
import { Link } from "react-router-dom";
const Herosection = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="hero-section px-2 py-4 flex flex-col md:flex-col w-full md:w-[90%] lg:w-[90%] md:mx-auto lg:flex-row">
        <div className="text mb-4 text-center h-full lg:w-1/2 flex flex-col justify-center items-center lg:h-[400px]">
          <div className="headline text-3xl font-serif font-bold tracking-wider ">
            <p>"Transform Your Finances</p>
            <p>with Budgetify."</p>
          </div>

          <div className="description tracking-wide p-2 font-thin italic">
            "Take charge of your financial future with Budgetify. Our
            comprehensive platform makes it easy to manage expenses, set savings
            goals, and invest wisely, all in one place. Join thousands of
            satisfied users who are achieving their financial dreams with our
            intuitive app."
          </div>

          <div className="get-started my-2">
            <button className="bg-blue-600 px-2 py-1 mx-2 rounded-md text-white hover:bg-blue-500 ">
              <Link to="/signup">Get Started Now!</Link>
            </button>
          </div>
        </div>

        <div className="video flex items-center justify-center rounded-xl  ">
          <video
            width="640"
            height="360"
            autoPlay
            muted
            loop
            className="rounded-xl"
          >
            <source src="/assets/videos/hero-section.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
