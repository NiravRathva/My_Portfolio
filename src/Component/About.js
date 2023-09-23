import React from "react";
import mypic2 from "../Images/mypic2.png";

const About = () => {
  return (
    <div id="about" className="about h-fit md:h-screen flex  items-center">
      {/* left section */}
      <div className="w-1/3 relative items-center hidden md:block p-2 md:p-4 lg:p-6 mx-auto">
        <div className="absolute   rounded-lg bg-gray-800 w-1/2 h-[50vh] lg:ml-12"> </div>
        <div className="w-3/5 h-[50vh] top-9 left-9 rounded-lg relative lg:ml-12">
          <img src={mypic2} className="h-full w-full rounded-lg object-cover" alt="" />
        </div>
      </div>
      {/* right section  */}
      <div className="w-full md:w-2/3 p-2 md:p-4 lg:p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
        {/* summary  */}
        <p className="text-base md:text-lg text-gray-700 mb-4">
        As a Computer Engineering graduate from L.D. College of Engineering, I have a strong foundation in web development, particularly in the MERN stack. I've honed my skills through two internships, where I contributed to UI enhancements and mobile responsiveness at Alluvium IoT Solutions, and developed an online local services platform with state-of-the-art features at Unnati Informatics, including React-Redux for state management and real-time updates via Axios.
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-4">With multiple MongoDB certifications, including Using MongoDB with Node.js and MongoDB Node.js Developer Path, I've demonstrated my proficiency in utilizing MongoDB for web applications. Eager to advance my web development skills, I'm seeking opportunities to collaborate, learn from experts, and deliver innovative solutions in the industry.</p>
        {/* skills  */}
        <h2 className="text-xl md:text-2xl font-bold mb-2">My Skills</h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            Html
          </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            CSS
          </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            Javascript
          </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            ReactJs
          </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            Redux
          </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            ExpressJs
          </div><div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            Nodejs
            </div><div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            MongoDB
            </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            Bootstrap
          </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            Tailwind 
          </div>
          <div className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base">
            Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
