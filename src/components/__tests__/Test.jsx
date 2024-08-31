import React, { useEffect, useState } from "react";

const Test = () => {
  const [x, setX] = useState("x");
  const [y, setY] = useState("y");
  const [z, setZ] = useState("z");

  const [flag, setflag] = useState(false);

  useEffect(() => {
    if (!flag) return;
    setX("2x");
    setY("2y");
    setZ("2z");
  }, [flag]);
  return (
    <div>
      {JSON.stringify([x, y, z])}
      <Button func={setflag} />
    </div>
  );
};
const Button = ({ func }) => {
  return <button onClick={() => func((prev) => !prev)}>update</button>;
};
export default Test;

/* 

import React, { useState } from "react";

const Test = () => {
  const [x, setX] = useState("x");
  const [y, setY] = useState("y");
  const [z, setZ] = useState("z");
  const handleUpdate = () => {
    setX("2x");
    setY("2y");
    setZ("2z");
  };
  return (
    <div>
      {JSON.stringify([x, y, z])}
      <Button func={handleUpdate} />
    </div>
  );
};
const Button = ({ func }) => {
  return <button onClick={() => func()}>update</button>;
};
export default Test;


*/
