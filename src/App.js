import Navbar from "./Component/Navbar";
import Intro from "./Component/Intro";
import bgImage from "./Images/bg1.jpg";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
function App() {
  return (
    <div className="App">
      {/* Shared background container */}
      <div
        className=" bg-cover bg-center h-96 lg:h-screen opacity-80 "
        style={{ backgroundImage: `url(${bgImage})`, zIndex: 1 }}
      >
        <Navbar style={{ zIndex: 2 }} />
        <Intro style={{ zIndex: 2 }} />
      </div>

      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
