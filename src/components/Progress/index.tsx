import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import NextButton from "./NextButton";
import Counter from "./Counter";
import { ProgressProps } from "../../types";
const Progress = ({ count, solved, boxes, handleNextLevel }: ProgressProps) => {
  return (
    <motion.div
      className={`${
        solved ? "" : "select-none"
      } relative w-full max-w-[100px] h-[29px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md flex justify-center`}
      animate={{ y: solved ? -60 : 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <AnimatePresence>
        {solved && <NextButton boxes={boxes} handleNextLevel={handleNextLevel} />}{" "}
      </AnimatePresence>
      <AnimatePresence>{!solved && <Counter count={count} />}</AnimatePresence>
    </motion.div>
  );
};

export default Progress;
