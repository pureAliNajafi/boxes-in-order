import { AnimatePresence, Reorder, motion } from "framer-motion";
import { BoxItemProps } from "../types";
import { boxItemAnimateProps } from "../config/motion";
import Dev from "./Dev";

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
            {...{
              ...boxItemAnimateProps,
              exit: {
                ...boxItemAnimateProps.exit,
                transition: { ...boxItemAnimateProps.exit.transition, delay: delayTime },
              },
              transition: {
                ...boxItemAnimateProps.transition,
                y: {
                  ...boxItemAnimateProps.transition.y,
                  delay: delayTime,
                },
                opacity: {
                  ...boxItemAnimateProps.transition.opacity,
                  delay: delayTime,
                },
              },
            }}
            className="w-full h-full shadow-main cursor-pointer rounded-md "
            style={{ background: box.color }}
          >
            <Dev>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-lg">{box.value}</span>
              </div>
            </Dev>
          </motion.div>
        )}
      </AnimatePresence>
    </Reorder.Item>
  );
};

export default BoxItem;
/*          initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{
              y: -100,
              opacity: 0,
              transition: { duration: 0.4, delay: delayTime },
            }}
            transition={{
              duration: 0.4,
              y: {
                delay: delayTime,
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
              opacity: {
                delay: delayTime,
              },
            }} */
