import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const CountDown = ({ count = 5 }: { count?: number }) => {
  const [remainingTime, setRemainingTime] = useState(count);
  useEffect(() => {
    remainingTime > 0 && setTimeout(() => setRemainingTime(remainingTime - 1), 1000);
  }, [remainingTime]);
  return <Counter count={remainingTime} displayMaxLimit={false} />;
};

export default CountDown;
