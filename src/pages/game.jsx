import GameComponent from "@/components/game/GameComponent";
import { UserContext, UserProvider } from "@/context/UserContext";
import React, { useContext, useEffect } from "react";

export default function game() {
  return (
    <div>
      <UserProvider>
        <GameComponent />
      </UserProvider>
    </div>
  );
}
