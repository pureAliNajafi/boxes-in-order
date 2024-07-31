const counterAnimateProps = {
  initial: {
    y: 20,
    scale: 0,
    opacity: 0,
    rotate: -90,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
  },
  exit: {
    y: -20,
    scale: 0,
    opacity: 0,
    rotate: 90,
    transition: { /*  ease: "easeOut", */ duration: 0.5 },
  },
  transition: { duration: 0.5 },
};
const characterAnimateProps = {
  initial: {
    y: 10,
    opacity: 0,
    scale: 0.66,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    y: -10,
    scale: 0.66,
    opacity: 0,
    transition: { /*  ease: "easeOut", */ duration: 0.5 },
  },
};
const fadeAnimateProps = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { /*  ease: "easeOut", */ duration: 0.3 },
  },
  transition: { bounceDamping: 20, duration: 0.3 },
};
export { counterAnimateProps, characterAnimateProps, fadeAnimateProps };
