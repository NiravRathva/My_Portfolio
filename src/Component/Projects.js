import { projectsData } from "../ProjectData";
import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div id="Projects" className="container mx-auto h-full mb-2">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-8">Some Of My Recent Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => openProject(project)}
            className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 relative cursor-pointer max-h-fit z-0"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full lg:h-3/4 h-auto rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{project.name}</h2>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="fixed top-0 left-0 right-0 bottom-0 lg:inset-x-20 lg:inset-y-20   bg-white  z-40 p-4 overflow-y-auto ">
          <button
            onClick={closeProject}
            className="absolute top-2 right-2 px-2 py-1 my-2 bg-red-500 text-white rounded cursor-pointer"
          >
            Close
          </button>
          <Project project={selectedProject} />
        </div>
      )}
    </div>
  );
};

export default Projects;
