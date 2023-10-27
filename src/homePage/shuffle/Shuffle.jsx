import React, { useEffect, useState } from "react";
import "./style.css";

const Shuffle = ({ text, font }) => {
  const [shuffledText, setShuffledText] = useState(text);

  useEffect(() => {
    const shuffleText = () => {
      const textArray = text.split("");
      let currentIndex = textArray.length,
        randomIndex,
        tempValue;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        tempValue = textArray[currentIndex];
        textArray[currentIndex] = textArray[randomIndex];
        textArray[randomIndex] = tempValue;
      }

      setShuffledText(textArray.join(""));
    };

    const shuffleInterval = setInterval(shuffleText, 200);

    // Stop the shuffle after 3 seconds
    const stopShuffleTimeout = setTimeout(() => {
      clearInterval(shuffleInterval);
      setShuffledText(text); // Reset the text to its original form
    }, 800);

    return () => {
      clearInterval(shuffleInterval);
      clearTimeout(stopShuffleTimeout);
    };
  }, [text]);

  const textStyle = {
    fontFamily: font === "sans-serif" ? "sans-serif" : "Chivo Mono, monospace",
  };

  return (
    <div className="shuffle-text" style={textStyle}>
      {shuffledText}
    </div>
  );
};

export default Shuffle;
