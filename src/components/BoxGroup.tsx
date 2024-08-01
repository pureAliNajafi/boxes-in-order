import { Reorder } from "framer-motion";
import BoxItem from "./BoxItem";
import { BoxGroupProps } from "../types";
const BoxGroup = ({ boxes, setBoxes, setTouchUpFlag, solved }: BoxGroupProps) => {
  return (
    <Reorder.Group
      values={boxes}
      onReorder={setBoxes}
      axis="x"
      className={`w-full max-w-[400px] min-h-[71px] flex justify-start items-end flex-nowrap gap-3 `}
      // initial={{ scaleY: 1 }} // Initial scale
      // animate={{ scaleY: solved ? 0 : 1 }} // Scale to 0 if solved, else 1
      // transition={{
      //   duration: 0.3,
      //   delay: 0.3,
      // }} // Transition properties
    >
      {boxes.map((box, index) => (
        <BoxItem
          key={box.value}
          box={box}
          delayTime={(index + 1) / 10}
          setTouchUpFlag={setTouchUpFlag}
          solved={solved}
        />
      ))}
    </Reorder.Group>
  );
};

export default BoxGroup;
