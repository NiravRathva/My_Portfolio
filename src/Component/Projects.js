import { projectsData } from "../ProjectData";

const Projects = () => {
  return (
    <div id="Projects" className="container mx-auto h-full mb-2 ">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-8">Some Of My Recent Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 relative z-[-1] h-fit"
            
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full lg:h-3/4 h-auto rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
            <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
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
        ))}
      </div>
    </div>
  );
};

export default Projects;
