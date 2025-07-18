import "./App.css";
import Navbar from "./Components/Navbar/navbar.jsx";
import Waves from "./Components/wave/Waves.jsx";
import About from "./Components/pages/About.jsx";
import Section_creative from "./Components/section_creative.jsx";
import Grid from "./Components/Grid/Grid.jsx";
import Quote from "./Components/Quote/Quote.jsx";
import FallingText from "./Components/FallingText/FallingText.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Cursor from "./Components/Cursor/Cursor.jsx";
import Projects from "./Components/pages/projects.jsx";
function App() {
  return (
    <div className="overflow-hidden">
      <Cursor />
      <div className="container">
        <Navbar />
      </div>

      <div
        id="Home"
        className="wave-container w-full h-[350px] relative overflow-hidden "
      >
        <Waves />
      </div>
      <div>
        <Grid />

        <Section_creative />
        <Grid />
      </div>

      <div>
        <Quote />
      </div>
      <Grid />

      <div className="about" id="about">
        <About />
      </div>
      <Grid />

      <div className="h-[40vh] sm:h-[50vh] md:h-[25vh] lg:h-[40vh] pt-4 pb-0 px-4 sm:px-8 lg:px-16 flex flex-col justify-center">
        <h1
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center sm:text-left"
        >
          My Tech Stack
        </h1>
        <FallingText
          text={`My tech stack spans Java, JavaScript, TypeScript, R, LaTeX · React, Redux, Tailwind CSS, GSAP, Express.js, Flask, AWS, Docker, Git, Postman,  MongoDB, MySQL, TensorFlow, PyTorch, Keras, Scikit-learn, OpenCV, Pandas, NumPy, Matplotlib, CUDA , Figma, Adobe Illustrator and Apache Spark.`}
          highlightWords={["React", "PyTorch", "OpenCV"]}
          highlightClass="highlighted"
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="1rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
      <Grid />
      <div className="projects" id="works">
        <Projects />
      </div>

      <div id="contacts" className="relative w-full min-h-screen">
        <Contact />
      </div>
    </div>
  );
}

export default App;
