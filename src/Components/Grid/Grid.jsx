import LetterGlitch from "./LetterGlitch";

const Grid = ({ isDarkMode = false }) => {
  return (
    <div>
      <LetterGlitch glitchSpeed={50} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Grid;
