import { useState, useEffect } from "react";
import BoxGroup from "./BoxGroup";

import { Boxes, Count, Flag, Solved } from "../types";
import { STATES } from "../routes/multi";
import { getState, isHost, myPlayer, setState } from "playroomkit";
import getShuffledItems from "../utilities/Shuffle";
import EndedRoundMessage from "./MultiPlayer/EndedRoundMessage";
import MultiPlayerLeaderBoard from "./MultiPlayerLeaderBoard";
import Confetti from "./Confettie";

const MultiPlayer = ({ updateCount }: { updateCount: any; updateScore: any; round: any }) => {
  const [boxes, setBoxes] = useState<Boxes>(getState(STATES.BOXES));
  const [correctGuesses, setCorrectGuesses] = useState<Count>(0);
  const [touchUpFlag, setTouchUpFlag] = useState<Flag>(false);
  const [solved, setSolved] = useState<Solved>(false);

  useEffect(() => {
    const getCorrectGuessesCount = () => {
      let count = 0;
      boxes.map((box, index) => {
        box.value === index + 1 && count++;
        return box;
      });
      return count;
    };
    setCorrectGuesses(getCorrectGuessesCount());
  }, [touchUpFlag]);

  useEffect(() => {
    setSolved(correctGuesses === 5);
    updateCount(correctGuesses);
  }, [correctGuesses]);

  const [round, setRound] = useState(getState(STATES.ROUND));
  useEffect(() => {
    // Function to update local state when Playroom state changes
    setInterval(() => {
      setRound(getState(STATES.ROUND));
    }, 10);
  }, []);
  const changeRoundStatus = (e: string) => {
    setState(STATES.ROUND, e); // Update Playroom state
    setRound(e); // Update local state for immediate feedback
  };
  useEffect(() => {
    if (!solved) return;
    setState(STATES.WINNER, myPlayer() /* .getProfile().name */);

    changeRoundStatus("end");

    const prevScore = myPlayer().getState(STATES.SCORE);
    myPlayer().setState(STATES.SCORE, prevScore + 1);

    setState(STATES.BOXES, getShuffledItems());
    setTimeout(() => {
      changeRoundStatus("start");
    }, 5000);
  }, [solved]);
  useEffect(() => {
    console.log("round change captured", getState(STATES.BOXES));

    setTimeout(() => {
      setBoxes(getState(STATES.BOXES));
      updateCount(0);
      setSolved(false);
    }, 800);
  }, [getState(STATES.ROUND)]);

  return (
    <>
      <section className="mt-[5svh] w-full flex flex-col justify-center items-center gap-4">
        <MultiPlayerLeaderBoard />

        <BoxGroup
          boxes={boxes}
          setBoxes={setBoxes}
          setTouchUpFlag={setTouchUpFlag}
          solved={round === "end"}
        />

        <EndedRoundMessage showCondition={round === "end"} />
        <Confetti celebrate={round === "end"} />
        {/* 
        <button onClick={() => changeRoundStatus(round !== "end" ? "end" : "start")}>
          round:{round}
        </button> */}
      </section>
    </>
  );
};

export default MultiPlayer;
/* import { useState, useEffect } from "react";
import BoxGroup from "./BoxGroup";

import { Boxes, Count, Flag, Solved } from "../types";
import { STATES } from "../routes/multi";
import { getState, isHost, myPlayer, setState } from "playroomkit";
import getShuffledItems from "../utilities/Shuffle";

const MultiPlayer = ({ updateCount }: { updateCount: any; updateScore: any; round: any }) => {
  const [boxes, setBoxes] = useState<Boxes>(getState(STATES.BOXES));
  const [correctGuesses, setCorrectGuesses] = useState<Count>(0);
  const [touchUpFlag, setTouchUpFlag] = useState<Flag>(false);
  const [solved, setSolved] = useState<Solved>(false);

  useEffect(() => {
    const getCorrectGuessesCount = () => {
      let count = 0;
      boxes.map((box, index) => {
        box.value === index + 1 && count++;
        return box;
      });
      return count;
    };
    setCorrectGuesses(getCorrectGuessesCount());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchUpFlag]); // updating the correctGuesses count *when drag ended*

  useEffect(() => {
    setSolved(correctGuesses === 5);
    updateCount(correctGuesses);
  }, [correctGuesses]);
  // useEffect(() => {
  //   // if (!solved) return;
  //   // updateScore();
  //   if (solved) updateRound("start");
  //   if (!solved) updateRound("end");
  //   console.log("round", round, "s", solved);
  // }, [solved]);
  const [round, setRound] = useState(getState(STATES.ROUND));
  useEffect(() => {
    // Function to update local state when Playroom state changes
    setInterval(() => {
      setRound(getState(STATES.ROUND));
    }, 10);
  }, []);
  const changeRoundStatus = (e: string) => {
    setState(STATES.ROUND, e); // Update Playroom state
    setRound(e); // Update local state for immediate feedback
  };
  useEffect(() => {
    if (!solved) return;

    changeRoundStatus("end");
    const prevScore = myPlayer().getState(STATES.SCORE);
    myPlayer().setState(STATES.SCORE, prevScore + 1);

    setState(STATES.BOXES, getShuffledItems());
    setTimeout(() => {
      changeRoundStatus("start");
    }, 5000);
  }, [solved]);
  useEffect(() => {
    console.log("round change captured", getState(STATES.BOXES));

    setTimeout(() => {
      setBoxes(getState(STATES.BOXES));
      // setBoxes(getShuffledItems());
      // setCorrectGuesses(0);
      setSolved(false);
    }, 1000);
  }, [getState(STATES.ROUND)]);
  // An additional effect to sync local boxes on global state change

  // useEffect(() => {
  //   const boxes = getState(STATES.BOXES);
  //   setBoxes(boxes);
  // }, [getState(STATES.BOXES)]); // or use a stable reference for dependency
  return (
    <>
      <section className="mt-[5svh] w-full flex flex-col justify-center items-center gap-4">

        <BoxGroup
          boxes={boxes}
          setBoxes={setBoxes}
          setTouchUpFlag={setTouchUpFlag}
          solved={round === "end"}
        />
        <button onClick={() => changeRoundStatus(round !== "end" ? "end" : "start")}>
          round:{round}
        </button>
      </section>
    </>
  );
};

export default MultiPlayer; */
