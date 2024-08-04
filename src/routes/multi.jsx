import { useState, useEffect } from "react";
import {
  onPlayerJoin,
  insertCoin,
  myPlayer,
  usePlayersList,
  isHost,
  setState,
  getState,
} from "playroomkit";
import MultiPlayer from "../components/MultiPlayer";
import getShuffledItems from "../utilities/Shuffle";
import MultiPlayerLeaderBoard from "../components/MultiPlayerLeaderBoard";
import TestKit from "../components/TestKit";
export const STATES = {
  BOXES: "boxes", // room
  COUNT: "count",
  SCORE: "score",
  ROUND: "round",
  WINNER: "winner",
};

const Multi = () => {
  const players = usePlayersList(true);
  const [callNewBoxesOrderFlag, setCallNewBoxesOrderFlag] = useState(false);

  const [loading, setLoading] = useState(true);
  const start = async () => {
    await insertCoin();
    setLoading(false);
  };

  const createNewBoxes = () => {
    const boxes = getShuffledItems();
    if (isHost()) {
      setState(STATES.BOXES, boxes);
    }
    // setState(STATES.BOXES, getShuffledItems());
  };

  const updateCount = (e) => {
    myPlayer().setState(STATES.COUNT, e);
  };

  const updateScore = () => {
    //updating current player score and Ending current Round
    const PrevScore = myPlayer().getState(STATES.SCORE);
    myPlayer().setState(STATES.SCORE, PrevScore + 1);
    players.forEach((player) => (player.state.count = 0));
  };
  // const [count, setCount] = useState(0);
  useEffect(() => {
    start();

    onPlayerJoin((state) => {
      // console.log(isHost() ? "BOSS" : "Loss");
      // console.log(myPlayer().)
      // console.log(myPlayer().getProfile().color); //ok
      createNewBoxes();
      myPlayer().setState(STATES.COUNT, 0);
      myPlayer().setState(STATES.SCORE, 0);
      console.log(myPlayer().getState(STATES.COUNT));
      // const newPlayer = { id: state.id, name: state.state.profile.name, count: 0, state };
      state.onQuit(() => {});
    });

    // const r = Math.random();
    // isHost() &&
    //   players.forEach((player) => {
    //     player.setState("glob", r);
    //   });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading indicator
  }
  return (
    <MultiPlayer
      roomBoxes={getState(STATES.BOXES)}
      updateCount={(e) => updateCount(e)}
      updateScore={(e) => updateScore(e)}
    />
  );
};

export default Multi;
