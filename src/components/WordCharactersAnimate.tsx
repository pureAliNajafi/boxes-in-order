import { AnimatePresence, motion } from "framer-motion";
import { wordCharactersAnimateProps } from "../config/motion";
import { Boxes } from "../types";

const WordCharactersAnimate = ({
  word,
  condition = true,
  charactersColor,
}: {
  word: string;
  charactersColor?: Boxes;
  condition?: boolean;
}) => {
  return (
    <AnimatePresence>
      {condition &&
        word.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            style={
              charactersColor && {
                color: charactersColor[i].color,
              }
            }
            {...wordCharactersAnimateProps}
            transition={{
              delay: 0.5,
              duration: ((i + 2) / 10) * 1.5,
            }}
            exit={{
              ...wordCharactersAnimateProps.exit,
              transition: {
                delay: 0.1,
                duration: ((word.length - 1 - i + 2) / 10) * 1.5,
              },
            }}
          >
            {char}
          </motion.span>
        ))}
    </AnimatePresence>
  );
};

export default WordCharactersAnimate;
