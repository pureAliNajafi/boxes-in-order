import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { characterAnimateProps, counterAnimateProps, fadeAnimateProps } from "../config/motion";
import { colors } from "../config/initialData";
const Progress = ({ count, solved }) => {
  return (
    <div
      className={`${
        solved ? "" : "select-none"
      } relative w-full max-w-[100px] h-[29px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md flex justify-center`}
    >
      <AnimatePresence>
        {solved && (
          <motion.button
            {...fadeAnimateProps}
            className="absolute top-[-2px] left-0 h-full right-0"
          >
            <div>
              {"Next".split("").map((character, i) => (
                <motion.span
                  className="inline-block"
                  style={{ color: colors[i] }}
                  {...characterAnimateProps}
                  transition={{ duration: ((i + 2) / 10) * 1.5 }}
                >
                  {character}
                </motion.span>
              ))}
            </div>
          </motion.button>
        )}{" "}
      </AnimatePresence>
      <AnimatePresence>
        {!solved && (
          <motion.ul
            {...fadeAnimateProps}
            className="relative flex items-start justify-between gap-0.5 w-[32px]"
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
