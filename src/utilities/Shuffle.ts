import { colors } from "../config/colors";

const unShuffledNumbers = [1, 2, 3, 4, 5];
const unShuffledColors = [...colors];

const getShuffledItems = () => {
  // console.log("getShuffledItems func called");
  const shuffledNumbers = shuffleArray(unShuffledNumbers, true);
  const shuffledColors = shuffleArray(unShuffledColors);
  let items = [];
  for (let i = 0; i < 5; i++) items[i] = { value: shuffledNumbers[i], color: shuffledColors[i] };
  return items;
};

// function shuffleArray<T>(array: T[], strictShuffle = false): T[] {
const shuffleArray = <T>(array: T[], strictShuffle = false): T[] => {
  const shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  if (strictShuffle && hasUnPositionedElement(array, shuffled)) return shuffleArray(array, true);
  return shuffled;
};

const hasUnPositionedElement = <T>(originalArray: T[], shuffledArray: T[]) => {
  for (let i = 0; i < originalArray.length; i++)
    if (originalArray[i] === shuffledArray[i]) return true;
  return false;
};
export default getShuffledItems;
