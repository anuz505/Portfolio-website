import { useState, useEffect, useMemo, useCallback } from "react";

const LetterGlitch = ({
  glitchColors = ["#330000", "#1a0000", "#000000"], // Dark red/black shades for light mode
  glitchSpeed = 300, // Increased interval for better performance
  isDarkMode = false,
}) => {
  const [displayText, setDisplayText] = useState("");

  // Memoize the pattern to avoid recalculation
  const {
    word1,
    word2,
    pattern,
    repeatedPattern,
    glitchableChars,
    fixedChar,
    separatorChar,
  } = useMemo(() => {
    const w1 = "0i10i01i0i10i1";
    const w2 = "////////////////";
    const pat = w1 + "|" + w2 + "|";
    return {
      word1: w1,
      word2: w2,
      pattern: pat,
      repeatedPattern: pat.repeat(6),
      glitchableChars: ["0", "1", "i"],
      fixedChar: "/",
      separatorChar: "|",
    };
  }, []);

  // Different color sets for light and dark modes
  const currentColors = useMemo(() => {
    const lightModeColors = ["#330000", "#1a0000", "#000000"];
    const darkModeColors = ["#ffffff", "#e5e5e5", "#cccccc"];
    return isDarkMode ? darkModeColors : lightModeColors;
  }, [isDarkMode]);

  // Memoize random color function
  const getRandomColor = useCallback(() => {
    return currentColors[Math.floor(Math.random() * currentColors.length)];
  }, [currentColors]);

  // Memoize the character array to avoid splitting on every render
  const patternChars = useMemo(
    () => repeatedPattern.split(""),
    [repeatedPattern]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Use the memoized character array and process more efficiently
      const glitchedText = patternChars
        .map((char) => {
          if (glitchableChars.includes(char)) {
            // If it's a glitchable character, randomly pick one from the glitchable set
            return glitchableChars[
              Math.floor(Math.random() * glitchableChars.length)
            ];
          }
          // For fixed chars and separators, keep as is
          return char;
        })
        .join("");

      setDisplayText(glitchedText);
    }, glitchSpeed);

    return () => clearInterval(interval);
  }, [glitchSpeed, patternChars, glitchableChars]);

  return (
    <div
      className={`overflow-hidden whitespace-nowrap py-2 w-screen h-auto flex justify-center items-center -ml-1 border-2 transition-colors duration-300 ${
        isDarkMode ? "bg-black border-white" : "bg-white border-black"
      }`}
    >
      <div className="inline-block">
        <span className="font-mono text-[10px] tracking-widest">
          {displayText.split("").map((char, index) => (
            <span
              key={index}
              style={{ color: getRandomColor() }}
              className={`inline-block transition-colors duration-75 ${
                char === "|" ? "ml-[1cm]" : ""
              }`}
            >
              {char === "|" ? "" : char}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default LetterGlitch;
