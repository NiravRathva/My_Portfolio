import React from 'react';

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white">
      <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
        I'm Nirav Rathwa
      </h1>
      <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl">
        And I'm a Web Developer
      </h1>
      <button  className="bg-gray-300 py-2 px-4 rounded-lg text-gray-800 font-bold text-sm md:text-base mt-4">
        Hire me
      </button>
    </div>
  );
};

export default Intro;
