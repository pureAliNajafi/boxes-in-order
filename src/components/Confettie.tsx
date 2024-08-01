import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { Solved } from "../types";

const Confetti = ({ solved }: { solved: Solved }) => {
  const [sizes, setSizes] = useState({ width: window.innerWidth, height: window.innerHeight });

  const handleResize = () => {
    setSizes({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactConfetti
      width={sizes.width}
      height={sizes.height} // Specify height for complete responsiveness
      style={{ opacity: solved ? 1 : 0, transition: "opacity 0.4s 0.4s" }}
      numberOfPieces={solved ? 200 : 0} // If you want to show confetti only when solved
      recycle={solved}
    />
  );
};

export default Confetti;
