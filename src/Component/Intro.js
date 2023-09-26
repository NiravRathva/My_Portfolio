import React from 'react';

const Intro = () => {
  return (
    <div id="home" className="flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-lg md:text-xl lg:text-3xl xl:text-5xl font-bold lg:font-black text-gray-800 my-2">
        I'm Nirav Rathwa
      </h1>
      <h1 className="text-base md:text-lg lg:text-2xl xl:text-4xl text-gray-800 font-black my-2">
        And I'm a Web Developer
      </h1>
      <button className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base mt-4 transition duration-300 my-2">
        <a href="#contact">Hire me</a>
      </button>
    </div>
  );
};

export default Intro;
