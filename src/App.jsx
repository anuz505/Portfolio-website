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
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeContext.jsx";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader.jsx";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [slideup, setSlideUp] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideUp(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowContent(true);
      }, 700);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {isLoading && (
        <div
          className={`fixed inset-0 z-[9999] transform transition-transform duration-1000 ease-in-out ${
            slideup ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <Loader />
        </div>
      )}
      <div
        className={`overflow-hidden transition-colors duration-300 ${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Cursor />
        <div className="container">
          <Navbar />
        </div>

        <div
          id="Home"
          className="wave-container w-full h-[350px] relative overflow-hidden "
        >
          <Waves isDarkMode={isDarkMode} />
        </div>
        <div>
          <Grid isDarkMode={isDarkMode} />

          <Section_creative isDarkMode={isDarkMode} />
          <Grid isDarkMode={isDarkMode} />
        </div>

        <div>
          <Quote isDarkMode={isDarkMode} />
        </div>
        <Grid isDarkMode={isDarkMode} />

        <div className="about" id="about">
          <About isDarkMode={isDarkMode} />
        </div>
        <Grid isDarkMode={isDarkMode} />

        <div
          className={`h-[40vh] sm:h-[50vh] md:h-[25vh] lg:h-[40vh] pt-4 pb-0 px-4 sm:px-8 lg:px-16 flex flex-col justify-center transition-colors duration-300 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <h1
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center sm:text-left transition-colors duration-300 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            My Tech Stack
          </h1>
          <FallingText
            text={`My tech stack spans Java, JavaScript, TypeScript, R, LaTeX · React, Redux, Tailwind CSS, GSAP, Express.js, Flask, AWS, Docker, Git, Postman,  MongoDB, MySQL, TensorFlow, PyTorch, Keras, Scikit-learn, OpenCV, Pandas, NumPy, Matplotlib, CUDA , Figma, Adobe Illustrator and Apache Spark.`}
            highlightWords={["React", "PyTorch", "OpenCV"]}
            highlightClass="highlighted"
            trigger="click"
            backgroundColor={isDarkMode ? "#000000" : "transparent"}
            wireframes={false}
            gravity={0.56}
            fontSize="1rem"
            mouseConstraintStiffness={0.9}
            isDarkMode={isDarkMode}
          />
        </div>
        <Grid isDarkMode={isDarkMode} />
        <div className="projects" id="works">
          <Projects isDarkMode={isDarkMode} />
        </div>

        <div id="contacts" className="relative w-full min-h-screen">
          <Contact isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;
