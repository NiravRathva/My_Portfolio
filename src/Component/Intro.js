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
      <button className="mt-4 px-4 md:px-6 lg:px-8 py-2 md:py-2 lg:py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm md:text-base">
        Hire me
      </button>
    </div>
  );
};

export default Intro;
