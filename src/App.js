import Navbar from "./Component/Navbar";
import Intro from "./Component/Intro";
import bgImage from "./Images/bg1.jpg";
import About from "./Component/About";
function App() {
  return (
    <div className="App">
      {/* Shared background container */}
      <div
        className=" bg-cover bg-center h-96 md:h-screen opacity-80 "
        style={{ backgroundImage: `url(${bgImage})`, zIndex: 1 }}
      >
         <Navbar style={{ zIndex: 2 }} />
      <Intro style={{ zIndex: 2 }} />
      </div>

     <About/>
    </div>
  );
}

export default App;
