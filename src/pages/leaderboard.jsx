import Button from "@/components/Button";
import LeaderboardList from "@/components/LeaderboardList";
import MainLayout from "@/layouts/MainLayout";
import { useRouter } from "next/router";
import React from "react";

export default function leaderboard() {
  const router = useRouter();

  const pushToMenu = () => {
    router.push("/");
  };

  return (
    <MainLayout>
      <LeaderboardList />
      <Button func={pushToMenu}>Menu</Button>
    </MainLayout>
  );
}
