import React from "react";
import { motion } from "framer-motion";
import {
  buttonCharactersAnimateProps,
  buttonBordersAnimateProps,
  fadeAnimateProps,
} from "../../config/motion";
import { Boxes, Void } from "../../types";
const NextButton = ({ boxes, handleNextLevel }: { boxes: Boxes; handleNextLevel: Void }) => {
  const borderColor = boxes[0].color;
  const charactersColor = boxes.slice(0);
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
        {/* characters animation */}
        {"Next".split("").map((character, i) => (
          <motion.span
            className="inline-block absolute top-0.5"
            style={{
              color: charactersColor[i + 1].color,
              left: 32 + i * (i === 1 ? 12.2 : i === 2 ? 10.7 : 10) + "px",
            }}
            {...buttonCharactersAnimateProps}
            transition={{
              duration: ((i + 2) / 10) * 1.5,
            }}
          >
            {character}
          </motion.span>
        ))}
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
