import { getState, setState, usePlayersList } from "playroomkit";
import React, { useEffect, useState } from "react";

const TestKit = () => {
  const [value, setValue] = useState(getState("bb"));
  const players = usePlayersList(true);

  useEffect(() => {
    // Function to update local state when Playroom state changes
    setInterval(() => {
      setValue(getState("bb"));
    }, 10);
    // Effect runs every time `counter` changes,
    // which is controlled by calling setCounter.
  }, []);

  const handleClick = () => {
    const newValue = Math.random();
    setState("bb", newValue); // Update Playroom state
    setValue(newValue); // Update local state for immediate feedback
  };
  // useEffect(() => {
  //   console.log("changeCaptured");
  // }, [players]);
  return (
    <div>
      <button onClick={handleClick}>yu {value}</button>
    </div>
  );
};

export default TestKit;
/* import { getState, setState } from "playroomkit";
import React, { useEffect, useState } from "react";

const TestKit = () => {
  const [value, setValue] = useState(getState("bb"));

  useEffect(() => {
    // Function to update local state when Playroom state changes
    const handlePlayroomStateChange = () => {
      setValue(getState("bb"));
    };

    // Initially set the value based on Playroom's state
    setValue(getState("bb"));

    // Simulating a mechanism where you can check for changes
    const stateChangedInterval = setInterval(() => {
      handlePlayroomStateChange();
    }, 100); // Check every 100ms for state changes; adjust as necessary

    return () => clearInterval(stateChangedInterval); // Cleanup on unmount
  }, []);

  const handleClick = () => {
    const newValue = Math.random();
    setState("bb", newValue); // Update Playroom state
    setValue(newValue); // Update local state for immediate feedback on the same instance
  };

  return (
    <div>
      <button onClick={handleClick}>yu {value}</button>
    </div>
  );
};

export default TestKit;
 */
