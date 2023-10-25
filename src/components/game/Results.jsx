import React from "react";
import Button from "../Button";
export function Results({ user, pushToUser, pushToLeaderboard }) {
  return (
    <div className="flex text-sphinx-yellow-900 flex-col justify-center items-center gap-12">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl font-bold ">{user.name}</h1>
        <div className="text-2xl">
          Obtuviste:{" "}
          <span className="text-3xl font-bold ">{user.points} Puntos!</span>
        </div>

        <div className="text-2xl">
          {user.points >= 10 ? (
            <span> Exelente, se ve que te la sabes </span>
          ) : user.points >= 7 ? (
            <span> Lo hiciste bien! </span>
          ) : user.points <= 5 ? (
            <span> Mas Suerte a la proxima! </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        <Button func={pushToUser}>Play Agin</Button>
        <Button func={pushToLeaderboard}>Leaderboard</Button>
      </div>
    </div>
  );
}
