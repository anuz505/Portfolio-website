import "./About.css";
import SplitText from "./SplitText";
import TiltedCard from "./TiltedCard";
import ScrollReveal from "../ScrollReveal/ScrollReveal.jsx";
import Magnet from "../Magnet/Magnet.jsx";
export default function About({ isDarkMode = false }) {
  return (
    <>
      {/* ORIGIN Section */}
      <div
        className={`origin-section w-full flex justify-center py-16 px-4 md:pt2 md:pb-0 transition-colors duration-300 ${
          isDarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <SplitText
          text="ORIGIN"
          className={`origin-title ${
            isDarkMode ? "gradient-text-dark" : "gradient-text"
          }`}
          duration={0.8}
          delay={0.2}
        />
      </div>

      {/* Main content - Stacks on mobile, side-by-side on larger screens */}
      <div className="container flex flex-col md:flex-row px-4 md:pl-8 lg:pl-16 gap-4 md:gap-8">
        {/* Portfolio Image Section (Left Side) */}
        <div
          className={`portfolio-section w-full md:min-w-[40vw] lg:min-w-[45vw] min-h-[60vh] md:h-screen flex items-center justify-center transition-colors duration-300 ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <TiltedCard
              imageSrc="/myphoto.jpg"
              altText="Portfolio Image"
              captionText="Portfolio Work"
              containerHeight="400px"
              containerWidth="100%"
              imageHeight="110%"
              imageWidth="95%"
              rotateAmplitude={1.2}
              scaleOnHover={1.03}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
            />
          </div>
        </div>

        {/* Right side content */}
        <div className="another-container w-full">
          {/* WHO I AM Section */}
          <div
            className={`who-i-am-section w-full h-20 flex items-center justify-center sm:justify-start mt-8 md:mt-12 transition-colors duration-300 ${
              isDarkMode ? "bg-black" : "bg-white"
            }`}
          >
            <h2
              className={`who-i-am-title text-2xl sm:text-3xl md:text-4xl mt-15 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              WHO I AM
            </h2>
          </div>

          {/* Description Section */}
          <div
            className={`description-section w-full min-h-[40vh] md:min-h-[60vh] flex items-center justify-center transition-colors duration-300 ${
              isDarkMode ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <div className="text-center sm:text-left max-w-4xl py-4 px-4 sm:px-8 mb-4">
              <div style={{ fontFamily: "Futura, Bebas Neue, " }}>
                <ScrollReveal
                  containerClassName="mt-5"
                  textClassName="text-xl sm:text-2xl md:text-xl font-light leading-tight tracking-wide transition-all duration-1000 ease-out"
                  animationDuration={1.2}
                  ease="power2.out"
                  scrollStart="top bottom-=20%"
                  scrollEnd="bottom top+=20%"
                  stagger={0.05}
                >
                  " I started with curiosity, not code. From sketching ideas to
                  building neural networks, my work blends logic with
                  creativity. I believe the best tech happens where thoughtful
                  design meets purposeful engineering. I’m a Computer Science
                  student passionate about machine learning, computer vision,
                  and full-stack development. When I’m not coding, I’m learning
                  Japanese or collaborating with friends to build things that
                  matter."
                </ScrollReveal>

                {/* Download CV Button with Magnet effect */}
                <div className="mt-8 text-center sm:text-left">
                  <Magnet padding={200} disabled={false} magnetStrength={50}>
                    <a
                      href="/Resume.pdf" // Path to your CV in the public folder
                      download="/Resume.pdf" // The filename for the user
                      className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isDarkMode
                          ? "bg-white text-black hover:bg-gray-200 focus:ring-gray-300"
                          : "bg-black text-white hover:bg-gray-800 focus:ring-gray-500"
                      }`}
                      style={{ fontFamily: "Bebas Neue, sans-serif" }}
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download CV
                    </a>
                  </Magnet>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
