import { projectsData } from "../ProjectData";

const Projects = () => {
  return (
    <div id="Projects" className="container mx-auto ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-8">Some of my recent Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {projectsData.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg p-4 h-fit">
            <img
              src={project.img}
              alt={project.name}
              className="w-full lg:h-3/4 h-auto rounded-md "
            />
            <h2 className="text-xl font-semibold mt-2">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
