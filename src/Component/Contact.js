import React from 'react';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row h-screen justify-center" >
      {/* Left Section */}
      <div className="md:w-1/2 p-4 bg-gray-100 flex  items-center ">
        <div>
          <h1 className="text-2xl font-bold">Contact info</h1>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <EmailOutlinedIcon className="mr-2" />: niravrtw01@gmail.com
            </div>
            <div className="flex items-center mb-2">
              <LocationOnOutlinedIcon className="mr-2" />: Vadodara, Gujarat, India
            </div>
            <div className="flex items-center mb-2">
              <a href="https://github.com/NiravRathva" className="flex items-center">
                <GitHubIcon className="mr-2" /> GitHub
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://www.linkedin.com/in/nirav-rathwa-8b0813290/" className="flex items-center">
                <LinkedInIcon className="mr-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 p-4 bg-gray-200 flex  items-center flex-col ">
        <div>
        <h1 className="text-2xl font-bold">Contact Me</h1>
        <p className="mt-4">
          <b>What’s your story?</b> Get in touch. Always available for freelancing if the right project comes along.
        </p>
        </div>
        <form className="mt-4">
          <input type="text" placeholder="Name" name="name" className="mb-2 p-2 rounded-md w-full" />
          <input type="text" placeholder="Email" name="email" className="mb-2 p-2 rounded-md w-full" />
          <textarea name="message" placeholder="Enter your message" rows="5" className="mb-2 p-2 rounded-md w-full"></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
