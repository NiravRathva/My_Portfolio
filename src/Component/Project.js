import React from "react";

const Project = ({project}) => {
  return (
    <div>
      <div
        
        className="bg-gray-100 my-2 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 mt-8 relative z-[-1] h-fit"
      >
        <img
          src={project.img}
          alt={project.name}
          className="w-full h-auto sm:w-1/2 md:w-3/4 lg:w-3/4 xl:w-3/4 mx-auto rounded-md object-cover"
        />
        <h2 className="text-xl font-semibold mt-2 text-center ">{project.name}</h2>
      </div>
      <p className="text-gray-600">{project.description}</p>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-2">
        <a
          href={project.frontendCode}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md "
        >
          Frontend code
        </a>
        <a
          href={project.frontendCode}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md "
        >
          Backend code
        </a>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md "
        >
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default Project;
