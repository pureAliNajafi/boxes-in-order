import React from "react";
import { motion } from "framer-motion";
import { buttonBordersAnimateProps, fadeAnimateProps } from "../config/motion";
import { Boxes, Void } from "../types";
import WordCharactersAnimate from "./WordCharactersAnimate";
const NextButton = ({ boxes, handleNextLevel }: { boxes: Boxes; handleNextLevel: Void }) => {
  const borderColor = boxes[0].color;
  const charactersColor = boxes.slice(1);
  return (
    <motion.button
      // whileTap={{ scale: 2 }}
      onClick={() => {
        handleNextLevel();
      }}
      {...fadeAnimateProps}
      className="absolute top-0 left-0 h-full right-0"
    >
      <div>
        <WordCharactersAnimate word="Next" charactersColor={charactersColor} />
      </div>
      {/* borders animation */}
      <ul>
        <motion.li
          style={{ borderColor: borderColor }}
          {...{
            ...buttonBordersAnimateProps,
            initial: { y: -10 },
          }}
          className="absolute top-0 left-0 w-full h-[calc(50%+1px)] border-2 border-b-0 rounded-md rounded-b-none"
        />
        <motion.li
          style={{ borderColor: borderColor }}
          {...buttonBordersAnimateProps}
          className="absolute bottom-0 left-0 w-full h-[calc(50%+1px)] border-2 border-t-0 rounded-md rounded-t-none"
        />
      </ul>
    </motion.button>
  );
};

export default NextButton;
