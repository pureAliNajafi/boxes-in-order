import React, { useState, useEffect } from "react";
import { Reorder } from "framer-motion";
import getShuffledItems from "../utilities/Shuffle";
import Counter from "./Counter";

const GameBoard = () => {
  const [items, setItems] = useState(getShuffledItems());
  const [correctGuesses, setCorrectGuesses] = useState(0);

  const [touchUpFlag, setTouchUpFlag] = useState(false);
  const [solved, setSolved] = useState(false);
  useEffect(() => {
    const getCorrectGuessesCount = () => {
      let count = 0;
      //   for (let index = 0; index < items.length; index++)
      //     if (items[index].value === index + 1) count++;
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
    <section className="w-full flex flex-col justify-center items-center gap-4">
      <Reorder.Group
        values={items}
        onReorder={setItems}
        axis="x"
        className="w-full max-w-[400px] flex justify-start items-end flex-nowrap gap-3 "
      >
        {items.map((item) => (
          <Item key={item.value} item={item} setTouchUpFlag={setTouchUpFlag}>
            {item}
          </Item>
        ))}
      </Reorder.Group>

      <Counter count={correctGuesses} solved={solved} />
    </section>
  );
};

const Item = ({ item, setTouchUpFlag }) => {
  return (
    <Reorder.Item
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      dragElastic={1}
      onDragEnd={() => {
        setTouchUpFlag((prev) => !prev);
      }}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      value={item}
      className={`shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] relative cursor-pointer rounded-md flex-1 aspect-square /border-2 /border-indigo-500`}
      style={{ background: item.color }}
    >
      {item.value}
    </Reorder.Item>
  );
};
export default GameBoard;
