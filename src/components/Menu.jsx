import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Button from "./Button";

export default function Menu() {
  const router = useRouter();
  const pushToUser = () => {
    router.push("/user-page");
  };

  const pushToLeaderboard = () => {
    router.push("/leaderboard");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-[300px] h-[300px] overflow-hidden flex justify-center items-center rounded-full bg-black p-3">
        <img className="w-full h-full object-cover " src="/Logo.jpg" alt="" />
      </div>
      <Button func={pushToUser}>Play</Button>
      <Button func={pushToLeaderboard}>Leaderboard</Button>
    </div>
  );
}
