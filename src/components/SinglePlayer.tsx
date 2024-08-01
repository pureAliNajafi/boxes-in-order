import { useState, useEffect } from "react";
import BoxGroup from "./BoxGroup";
import getShuffledItems from "../utilities/Shuffle";
import Progress from "./Progress";
import { Boxes, Count, Flag, Solved } from "../types";

const SinglePlayer = () => {
  // Framer Motion re-renders new boxes on drag (rather than positioning them with CSS). Therefore, using useMemo to cache them is pointless.

  const [boxes, setBoxes] = useState<Boxes>(() => getShuffledItems());
  const [correctGuesses, setCorrectGuesses] = useState<Count>(0);
  const [touchUpFlag, setTouchUpFlag] = useState<Flag>(false);
  const [solved, setSolved] = useState<Solved>(false);
  useEffect(() => {
    const getCorrectGuessesCount = () => {
      let count = 0;
      boxes.map((box, index) => {
        box.value === index + 1 && count++;
        return box;
      });
      return count;
    };
    setCorrectGuesses(getCorrectGuessesCount());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchUpFlag]); // updating the correctGuesses count *when drag ended*

  useEffect(() => {
    setSolved(correctGuesses === 5);
  }, [correctGuesses]);
  return (
    <section className="mt-[5svh] w-full flex flex-col justify-center items-center gap-4">
      <BoxGroup boxes={boxes} setBoxes={setBoxes} setTouchUpFlag={setTouchUpFlag} />
      <Progress count={correctGuesses} boxes={boxes} solved={solved} />
    </section>
  );
};

export default SinglePlayer;