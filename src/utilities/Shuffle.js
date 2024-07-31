const unShuffledNumbers = [1, 2, 3, 4, 5];
const unShuffledColors = ["#60e1e0", "#ffc145", "#ed6a5e", "#cb9cf2", "#377771"];

const getShuffledItems = () => {
  console.log("getShuffledItems func called");
  const shuffledNumbers = shuffleArray(unShuffledNumbers, true);
  const shuffledColors = shuffleArray(unShuffledColors);
  let items = [];
  for (let i = 0; i < 5; i++) items[i] = { value: shuffledNumbers[i], color: shuffledColors[i] };
  return items;
};

const shuffleArray = (array, strictShuffle = false) => {
  const shuffled = array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  if (strictShuffle && hasUnPositionedElement(array, shuffled)) return shuffleArray(array, true);
  return shuffled;
};

const hasUnPositionedElement = (originalArray, shuffledArray) => {
  for (let i = 0; i < originalArray.length; i++)
    if (originalArray[i] === shuffledArray[i]) return true;
  return false;
};
export default getShuffledItems;
