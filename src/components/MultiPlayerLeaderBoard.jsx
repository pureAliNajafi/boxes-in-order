/* eslint-disable jsx-a11y/alt-text */
import { usePlayersList } from "playroomkit";
import React from "react";

const MultiPlayerLeaderBoard = () => {
  const players = usePlayersList(true);
  return (
    <section className="fixed top-[60px] left-0 border-lime-100">
      {players &&
        players.map((player) => (
          <div key={player.id}>
            <h1>
              {player.state.profile?.name} {player.state.score}
            </h1>
            {player.state.count}
            <img
              src={player.state.profile?.photo || ""}
              className="w-10 h-10 border-2 rounded-full"
              style={{
                borderColor: player.state.profile?.color,
              }}
            />
          </div>
        ))}
    </section>
  );
};

export default MultiPlayerLeaderBoard;
