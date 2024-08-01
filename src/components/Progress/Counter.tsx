import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimateProps, counterAnimateProps } from "../../config/motion";
import { Count } from "../../types";
const Counter = ({ count }: { count: Count }) => {
  return (
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
  );
};

export default Counter;
