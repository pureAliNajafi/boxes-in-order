import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeAnimateProps, counterAnimateProps } from "../config/motion";
type CounterProps = {
  count: number;
  maxNumber?: number; // Making maxNumber optional
  displayMaxLimit?: boolean;
};

const Counter = ({ count, maxNumber = 5, displayMaxLimit = true }: CounterProps) => {
  const numbers = Array.from({ length: maxNumber }, (_, index) => index);
  return (
    <motion.ul
      {...fadeAnimateProps}
      className="relative -top-[1px] flex items-start justify-between gap-4 w-[38px]"
    >
      <li className="h-full">
        {numbers.map((num) => (
          <AnimatePresence key={num}>
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
      {displayMaxLimit && <li className="text-[18px] text-[#cccccc] mt-0.5">/{maxNumber}</li>}
    </motion.ul>
  );
};

export default Counter;
