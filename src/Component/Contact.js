import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 py-12 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-2">
            GET IN TOUCH
          </h1>
          <p className="text-gray-500">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along.
          </p>
        </div>
        <div className="mt-8 text-center">
          <p className="flex items-center">
            <EmailOutlinedIcon className="text-gray-500 mr-2" />
            niravrtw01@gmail.com
          </p>
          <p className="flex items-center mt-4">
            <LocationOnOutlinedIcon className="text-gray-500 mr-2 " />
            Vadodara, Gujrat, India
          </p>
          <div className="mt-4 flex space-x-4 justify-center">
            <a href="https://github.com/NiravRathva">
              <GitHubIcon className="text-gray-500 hover:text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/in/nirav-rathwa-8b0813290/">
              <LinkedInIcon className="text-gray-500 hover:text-gray-600" />
            </a>
          </div>
        </div>
      </div>
      {/* lower section */}
      <div className="container mx-auto px-4 mt-8">
        <form action="">
          <div className="lg:flex items-center">
            <div className="mb-4 lg:w-1/2 lg:pr-4 ">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="mt-4 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-4">
              <textarea
                cols="10"
                placeholder="Enter Your Message"
                rows="5"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-gray-400"
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
