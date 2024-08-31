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
    >
      {boxes.map((box, index) => (
        <BoxItem
          key={box.value}
          box={box}
          // delayTime={(index + 1) / 10} //from left
          delayTime={(5 - index + 1) / 10} //from-right
          setTouchUpFlag={setTouchUpFlag}
          solved={solved}
        />
      ))}
    </Reorder.Group>
  );
};

export default BoxGroup;
