import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import {
  buttonCharactersAnimateProps,
  buttonBordersAnimateProps,
  counterAnimateProps,
  fadeAnimateProps,
} from "../config/motion";
const Progress = ({ count, solved, items }) => {
  return (
    <div
      className={`${
        solved ? "" : "select-none"
      } relative w-full max-w-[100px] h-[29px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md flex justify-center`}
    >
      <AnimatePresence>
        {solved && (
          <motion.button {...fadeAnimateProps} className="absolute top-0 left-0 h-full right-0">
            <div>
              {"Next".split("").map((character, i) => (
                <motion.span
                  className="inline-block absolute top-0.5"
                  style={{
                    color: items[i + 1].color,
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
            <ul>
              <motion.li
                style={{ borderColor: items[0].color }}
                {...{
                  ...buttonBordersAnimateProps,
                  initial: { y: -10 },
                }}
                className="absolute top-0 left-0 w-full h-[calc(50%+1px)] border-2 border-b-0 rounded-md rounded-b-none"
              />
              <motion.li
                {...buttonBordersAnimateProps}
                className="absolute bottom-0 left-0 w-full h-[calc(50%+1px)] border-2 border-t-0 rounded-md rounded-t-none"
              />
            </ul>
          </motion.button>
        )}{" "}
      </AnimatePresence>
      <AnimatePresence>
        {!solved && (
          <motion.ul
            {...fadeAnimateProps}
            className="relative -top-[1px] flex items-start justify-between gap-0.5 w-[32px]"
          >
            <li className="h-full">
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <AnimatePresence>
                  {count === num && (
                    <motion.span
                      className="inline-block absolute left-0 -top-1 text-[24px]"
                      {...counterAnimateProps}
                    >
                      {count}
                    </motion.span>
                  )}
                </AnimatePresence>
              ))}
            </li>
            <li className="text-[18px] text-[#cccccc] mt-0.5">/5</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Progress;
