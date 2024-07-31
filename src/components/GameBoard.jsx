import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import getShuffledItems from "../utilities/Shuffle";
import Progress from "./Progress";
import Box from "./Box";

const GameBoard = () => {
  const [items, setItems] = useState(getShuffledItems());
  const [correctGuesses, setCorrectGuesses] = useState(0);

  const [touchUpFlag, setTouchUpFlag] = useState(false);
  const [solved, setSolved] = useState(false);
  useEffect(() => {
    const getCorrectGuessesCount = () => {
      let count = 0;
      items.map((item, index) => {
        item.value === index + 1 && count++;
        return item;
      });
      return count;
    };
    setCorrectGuesses(getCorrectGuessesCount());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchUpFlag]); // updating the correctGuesses count when drag ended

  useEffect(() => {
    setSolved(correctGuesses === 5);
  }, [correctGuesses]);
  return (
    <section className="mt-[5svh] w-full flex flex-col justify-center items-center gap-4">
      <Reorder.Group
        values={items}
        onReorder={setItems}
        axis="x"
        className="w-full max-w-[400px] flex justify-start items-end flex-nowrap gap-3 "
      >
        {items.map((item) => (
          <Box key={item.value} item={item} setTouchUpFlag={setTouchUpFlag}>
            {item}
          </Box>
        ))}
      </Reorder.Group>

      <Progress count={correctGuesses} items={items} solved={solved} />
    </section>
  );
};

export default GameBoard;
