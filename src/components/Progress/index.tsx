import { AnimatePresence } from "framer-motion";
import React from "react";
import NextButton from "./NextButton";
import Counter from "./Counter";
import { ProgressProps } from "../../types";
const Progress = ({ count, solved, boxes }: ProgressProps) => {
  return (
    <div
      className={`${
        solved ? "" : "select-none"
      } relative w-full max-w-[100px] h-[29px] shadow-[inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-md flex justify-center`}
    >
      <AnimatePresence>{solved && <NextButton boxes={boxes} />} </AnimatePresence>
      <AnimatePresence>{!solved && <Counter count={count} />}</AnimatePresence>
    </div>
  );
};

export default Progress;
