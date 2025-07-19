import React, { useState } from "react";
import Stepper, { Step } from "./Stepper";

const Contact = ({ isDarkMode = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", "49ffd318-4ac8-4e27-ada0-9d0336a21fd3"); // Replace with your actual access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setSubmitMessage("Message sent successfully!");
        event.target.reset();
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic height based on current step
  const getContainerHeight = () => {
    if (currentStep === 1 || currentStep === 4) {
      return "min-h-[40vh]"; // Reduced height for first and last step
    }
    return "min-h-screen"; // Full height for steps 2 and 3
  };

  return (
    <div
      className={`w-full ${getContainerHeight()} flex items-center justify-center p-4 sm:p-0 transition-colors duration-300 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full max-w-6xl">
        <Stepper
          initialStep={1}
          onStepChange={(step) => {
            console.log(step);
            setCurrentStep(step);
          }}
          onFinalStepCompleted={() => console.log("All steps completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
          stepCircleContainerClassName="!max-w-none !w-full sm:!w-4/5 !mx-auto"
          contentClassName="!w-full"
          isDarkMode={isDarkMode}
        >
          <Step>
            <div className="text-center space-y-4 sm:space-y-6">
              <h2
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                LET'S CONNECT
              </h2>
              <p
                className={`text-lg sm:text-xl lg:text-2xl px-4 sm:px-0 ${
                  isDarkMode ? "text-white" : "text-gray-600"
                }`}
              >
                Ready to bring your ideas to life? Let's start a conversation.
              </p>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 relative ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                REACH OUT TO ME
                <div
                  className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 lg:-top-4 lg:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full animate-pulse ${
                    isDarkMode ? "bg-white" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full animate-bounce ${
                    isDarkMode ? "bg-white" : "bg-black"
                  }`}
                ></div>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full px-4 sm:px-6 lg:px-8">
                {/* GitHub */}
                <a
                  href="https://github.com/anuz505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden flex flex-col items-center p-3 sm:p-4 lg:p-6 border-2 rounded-xl transition-all duration-500 hover:scale-105 shadow-lg transform hover:rotate-1 ${
                    isDarkMode
                      ? "bg-gray-900 border-white text-white hover:bg-white hover:text-black"
                      : "bg-white border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <div
                    className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  ></div>
                  <svg
                    className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 lg:mb-4 transition-colors duration-500 relative z-10 ${
                      isDarkMode
                        ? "text-white group-hover:text-black"
                        : "text-black group-hover:text-white"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <h3
                    className={`text-sm sm:text-lg lg:text-xl font-semibold relative z-10 transition-colors duration-500 ${
                      isDarkMode
                        ? "text-white group-hover:text-black"
                        : "text-black group-hover:text-white"
                    }`}
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    GitHub
                  </h3>
                  <p
                    className={`text-xs sm:text-sm lg:text-base relative z-10 transition-colors duration-500 ${
                      isDarkMode
                        ? "text-gray-300 group-hover:text-yellow-300"
                        : "text-gray-600 group-hover:text-yellow-300"
                    }`}
                  >
                    @anuz505
                  </p>
                </a>

                <a
                  href="https://www.linkedin.com/in/anuj-bhandari-75a530198/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden flex flex-col items-center p-3 sm:p-4 lg:p-6 border-2 rounded-xl transition-all duration-500 hover:scale-105 shadow-lg transform hover:-rotate-1 ${
                    isDarkMode
                      ? "bg-gray-900 border-white text-white hover:bg-white hover:text-black"
                      : "bg-white border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <div
                    className={`absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  ></div>
                  <svg
                    className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 lg:mb-4 transition-colors duration-500 relative z-10 ${
                      isDarkMode
                        ? "text-white group-hover:text-black"
                        : "text-black group-hover:text-white"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <h3
                    className={`text-sm sm:text-lg lg:text-xl font-semibold relative z-10 transition-colors duration-500 ${
                      isDarkMode
                        ? "text-white group-hover:text-black"
                        : "text-black group-hover:text-white"
                    }`}
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    LinkedIn
                  </h3>
                  <p
                    className={`text-xs sm:text-sm lg:text-base relative z-10 transition-colors duration-500 ${
                      isDarkMode
                        ? "text-gray-300 group-hover:text-yellow-300"
                        : "text-gray-600 group-hover:text-yellow-300"
                    }`}
                  >
                    Anuj Bhandari
                  </p>
                </a>

                {/* Email */}
                <a
                  href="mailto:anuzb50@gmail.com"
                  className={`group relative overflow-hidden flex flex-col items-center p-3 sm:p-4 lg:p-6 border-2 rounded-xl transition-all duration-500 hover:scale-105 shadow-lg transform hover:rotate-1 sm:col-span-2 lg:col-span-1 ${
                    isDarkMode
                      ? "bg-gray-900 border-white text-white hover:bg-white hover:text-black"
                      : "bg-white border-black text-black hover:bg-black hover:text-white"
                  }`}
                >
                  <div
                    className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  ></div>
                  <svg
                    className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mb-2 sm:mb-3 lg:mb-4 transition-colors duration-500 relative z-10 ${
                      isDarkMode
                        ? "text-white group-hover:text-black"
                        : "text-black group-hover:text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <h3
                    className={`text-sm sm:text-lg lg:text-xl font-semibold relative z-10 transition-colors duration-500 ${
                      isDarkMode
                        ? "text-white group-hover:text-black"
                        : "text-black group-hover:text-white"
                    }`}
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    Email
                  </h3>
                  <p
                    className={`text-xs sm:text-sm lg:text-base relative z-10 transition-colors duration-500 ${
                      isDarkMode
                        ? "text-gray-300 group-hover:text-yellow-300"
                        : "text-gray-600 group-hover:text-yellow-300"
                    }`}
                  >
                    anuzb50@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-4 sm:space-y-6">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 relative ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                SEND ME A MESSAGE
                <div
                  className={`absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 lg:w-16 h-1 ${
                    isDarkMode ? "bg-white" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 lg:w-8 h-1 ${
                    isDarkMode ? "bg-white" : "bg-black"
                  }`}
                ></div>
              </h2>
              <form
                onSubmit={onSubmit}
                className="w-full space-y-4 sm:space-y-6 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0"
              >
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className={`w-full p-3 sm:p-4 border-2 rounded-none focus:outline-none text-base sm:text-lg transition-all duration-300 transform focus:-translate-y-1 ${
                      isDarkMode
                        ? "bg-black border-white text-white placeholder-gray-300 focus:border-white focus:shadow-[4px_4px_0px_0px_#ffffff]"
                        : "bg-white border-black text-black placeholder-gray-500 focus:border-black focus:shadow-[4px_4px_0px_0px_#000000]"
                    }`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full transform translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform duration-300 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  ></div>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className={`w-full p-3 sm:p-4 border-2 rounded-none focus:outline-none text-base sm:text-lg transition-all duration-300 transform focus:-translate-y-1 ${
                      isDarkMode
                        ? "bg-black border-white text-white placeholder-gray-300 focus:border-white focus:shadow-[4px_4px_0px_0px_#ffffff]"
                        : "bg-white border-black text-black placeholder-gray-500 focus:border-black focus:shadow-[4px_4px_0px_0px_#000000]"
                    }`}
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full transform translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform duration-300 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  ></div>
                </div>
                <div className="relative group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    required
                    className={`w-full p-3 sm:p-4 border-2 rounded-none focus:outline-none resize-none text-base sm:text-lg transition-all duration-300 transform focus:-translate-y-1 ${
                      isDarkMode
                        ? "bg-black border-white text-white placeholder-gray-300 focus:border-white focus:shadow-[4px_4px_0px_0px_#ffffff]"
                        : "bg-white border-black text-black placeholder-gray-500 focus:border-black focus:shadow-[4px_4px_0px_0px_#000000]"
                    }`}
                  ></textarea>
                  <div
                    className={`absolute top-0 left-0 w-full h-full transform translate-x-1 translate-y-1 -z-10 group-focus-within:translate-x-2 group-focus-within:translate-y-2 transition-transform duration-300 ${
                      isDarkMode ? "bg-white" : "bg-black"
                    }`}
                  ></div>
                </div>
                <div className="relative group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-3 sm:p-4 border-2 rounded-none transition-all duration-300 text-base sm:text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 ${
                      isDarkMode
                        ? "bg-white text-black border-white hover:bg-gray-800 hover:text-white hover:shadow-[4px_4px_0px_0px_#ffffff]"
                        : "bg-black text-white border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#000000]"
                    }`}
                    style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>
                  <div className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                </div>
                {submitMessage && (
                  <div className="relative">
                    <p
                      className={`text-center mt-4 p-3 sm:p-4 border-2 text-sm sm:text-base font-semibold transform -translate-y-1 shadow-[4px_4px_0px_0px_#666666] ${
                        submitMessage.includes("successfully")
                          ? isDarkMode
                            ? "text-white bg-gray-800 border-white"
                            : "text-black bg-white border-black"
                          : isDarkMode
                          ? "text-white bg-black border-white"
                          : "text-white bg-black border-black"
                      }`}
                    >
                      {submitMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>
          </Step>

          <Step>
            <div className="text-center space-y-4 sm:space-y-6 px-4 sm:px-0">
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                style={{ fontFamily: "Bebas Neue, sans-serif" }}
              >
                THANK YOU!
              </h2>
              <p
                className={`text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 ${
                  isDarkMode ? "text-gray-300" : "text-black"
                }`}
              >
                I'll get back to you as soon as possible.
              </p>
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
                🚀
              </div>
              <p
                className={`text-base sm:text-lg lg:text-xl ${
                  isDarkMode ? "text-gray-300" : "text-black"
                }`}
              >
                Let's build something amazing together!
              </p>
            </div>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default Contact;
