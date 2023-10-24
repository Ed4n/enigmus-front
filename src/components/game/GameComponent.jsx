import { UserContext } from "@/context/UserContext";
import React, { useContext } from "react";

export default function GameComponent() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Game</h1>
      <h2>{user.name}</h2>
      <button onClick={console.log(user)}></button>
    </div>
  );
}
