import NavWord from "./NavWord";
const Nav = () => {
  return (
    <nav className="flex flex-row  justify-between absolute top-4 left-0  border-orange-400 border-2 h-fit w-full text-2xl ">
      <div className="t">
        <ul className="flex gap-2 flex-wrap">
          <NavWord word="boxes" />
          <NavWord word="in" />
          <NavWord word="order" />
        </ul>
      </div>

      <div className="tex">🚍</div>
    </nav>
  );
};

export default Nav;
/* 
    <nav className="flex flex-row  justify-between absolute top-4 left-0  border-orange-400 border-2 h-fit w-full text-2xl text-center">
      <div className="flex gap-0.5 relative w-fit  /w-[250px]">
        <div className="h-[35.6px] w-[35.6px] rounded-sm bg-red-500  shadow-main">b</div>

        <motion.div
          className="z-[-2] absolute left-[37px] top-0 w-full whitespace-nowrap overflow-hidden text-left text-2xl "
          initial={{ width: 0 }}
          animate={{ width: 220 }}
          transition={{
            duration: 4,
            width: {
              delay: 0.5,
              type: "spring",
              damping: 4,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}
        >
          oxes in order
        </motion.div>
        <motion.div
          className="z-[-1] absolute left-0 top-0 h-[35.6px] w-[35.6px] rounded-sm bg-purple-500  shadow-main"
          initial={{ x: 0 }}
          animate={{ x: 240 }}
          transition={{
            duration: 4,
            x: {
              delay: 0.5,
              type: "spring",
              damping: 4,
              stiffness: 200,
              restDelta: 0.001,
            },
=
          }}
          ></motion.div>
        </div>
        <div className="tex">boxes in order</div>
      </nav>
*/
