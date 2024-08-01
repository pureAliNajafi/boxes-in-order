import { Reorder } from "framer-motion";
import BoxItem from "./BoxItem";
import { BoxGroupProps } from "../types";
const BoxGroup = ({ boxes, setBoxes, setTouchUpFlag }: BoxGroupProps) => {
  return (
    <Reorder.Group
      values={boxes}
      onReorder={setBoxes}
      axis="x"
      className="w-full max-w-[400px] flex justify-start items-end flex-nowrap gap-3 "
    >
      {boxes.map((box) => (
        <BoxItem key={box.value} box={box} setTouchUpFlag={setTouchUpFlag} />
      ))}
    </Reorder.Group>
  );
};

export default BoxGroup;
