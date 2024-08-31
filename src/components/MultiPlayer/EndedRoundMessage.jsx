import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getState } from "playroomkit";
import { STATES } from "../../pages/multi";
import CountDown from "../CountDown";
const EndedRoundMessage = ({ showCondition }: { showCondition: boolean }) => {
  const winnerProfile = getState(STATES.WINNER)?.state.profile;

  return (
    <div className="relative h-[29px] w-full max-w-[400px]">
      <AnimatePresence>
        {showCondition && (
          <motion.ul
            className={`absolute top-0 left-0 w-full h-full translate-y-[-60px] flex flex-col justify-center items-center test-center rounded-md `}
          >
            <motion.li
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                opacity: {
                  duration: 0.3,
                  delay: 0.6,
                },
                x: {
                  type: "spring", // Set the transition type to spring
                  stiffness: 80, // Adjust stiffness for bounciness
                  damping: 5, // Control damping for how quickly the spring settles
                  restDelta: 0.001,
                  duration: 0.3, // This may not be necessary for spring but you can set a max duration
                  delay: 0.6, // Delay before starting the animation
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                  delay: 0,
                },
              }}
            >
              <span className="text-[24px]" style={{ color: winnerProfile?.color }}>
                {winnerProfile?.name}
              </span>{" "}
              Won This Round.
            </motion.li>

            <motion.li
              className="flex flex-row"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                opacity: {
                  duration: 0.3,
                  delay: 0.6,
                },
                x: {
                  type: "spring", // Set the transition type to spring
                  stiffness: 80, // Adjust stiffness for bounciness
                  damping: 5, // Control damping for how quickly the spring settles
                  restDelta: 0.001,
                  duration: 0.3, // This may not be necessary for spring but you can set a max duration
                  delay: 0.6, // Delay before starting the animation
                },
              }}
              exit={{
                x: -100,
                opacity: 0,
                transition: {
                  duration: 0.3,
                  delay: 0,
                },
              }}
            >
              <span>Next Round Starts In</span>
              <span className="inline-block scale-[0.66] translate-y-[-1px]">
                <CountDown />
              </span>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EndedRoundMessage;
