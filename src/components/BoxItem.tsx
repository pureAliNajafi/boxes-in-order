import { Reorder } from "framer-motion";
import { BoxItemProps } from "../types";

const BoxItem = ({ box, setTouchUpFlag }: BoxItemProps) => {
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
      value={box} // dont change this
      className={`shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] relative cursor-pointer rounded-md flex-1 aspect-square /border-2 /border-indigo-500`}
      style={{ background: box.color }}
    >
      {box.value}
    </Reorder.Item>
  );
};
export default BoxItem;
