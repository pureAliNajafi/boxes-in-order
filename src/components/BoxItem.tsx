import { AnimatePresence, Reorder, motion } from "framer-motion";
import { BoxItemProps } from "../types";

const BoxItem = ({ box, delayTime, setTouchUpFlag, solved }: BoxItemProps) => {
  return (
    <Reorder.Item
      drag={!solved}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.12 }}
      dragElastic={1}
      onDragEnd={() => {
        setTouchUpFlag((prev) => !prev);
      }}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      value={box} // dont change this
      className={`relative flex-1 aspect-square`}
    >
      <AnimatePresence>
        {!solved && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -100,
              opacity: 0,
              transition: { duration: 0.4, delay: delayTime },
            }}
            transition={{
              duration: 0.4,
              delay: delayTime,
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            }}
            className="w-full h-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] cursor-pointer rounded-md "
            style={{ background: box.color }}
          >
            {box.value}
          </motion.div>
        )}
      </AnimatePresence>
    </Reorder.Item>
  );
};

export default BoxItem;
