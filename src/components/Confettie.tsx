import React, { useEffect } from "react";
import ReactConfetti from "react-confetti";
import { Solved } from "../types";
import { useWindowSize } from "@react-hook/window-size";

const Confetti = ({ celebrate }: { celebrate: boolean }) => {
  const [width, height] = useWindowSize();
  useEffect(() => {
    console.log("*", width, height);
  });
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 overflow-hidden /bg-indigo-300">
      <ReactConfetti
        height={height}
        width={width < 1920 ? 1920 : width}
        // style={{ opacity: solved ? 1 : 0, transition: "opacity 0.4s 0.4s" }}
        numberOfPieces={celebrate ? 275 : 0} // If you want to show confetti only when solved
      />
    </div>
  );
};

export default Confetti;
