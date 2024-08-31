import { useState } from "react";
import { wordCharactersAnimateProps } from "../../config/motion";
import { AnimatePresence, motion } from "framer-motion";
import WordCharactersAnimate from "../WordCharactersAnimate";
import { colors } from "../../config/colors";
const NavWord = ({ word }: { word: string }) => {
  const [wideOpen, setWideOpen] = useState(false);
  const bgColor = colors[((Math.random() * 10) / 2) | 0];
  return (
    <motion.li
      onClick={() => {
        setWideOpen(!wideOpen);
      }}
      initial={{ width: 32 }}
      animate={{ width: wideOpen ? "auto" : 32 }}
      transition={{ delay: wideOpen ? 0 : 0.5 }}
      className={`${wideOpen ? "w-auto" : "w-[32px]"} overflow-hidden whitespace-nowrap `}
    >
      <div className="w-full duration-300">
        <span
          style={{ background: bgColor }}
          className="inline-block h-[32px] w-[32px] rounded-sm shadow-main /bg-red-500 text-center duration-500"
        >
          {word.at(0)}
        </span>

        <WordCharactersAnimate word={word.slice(1)} condition={wideOpen} />
      </div>
    </motion.li>
  );
};

export default NavWord;
