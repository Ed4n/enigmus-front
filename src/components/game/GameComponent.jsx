import { UserContext } from "@/context/UserContext";
import MainLayout from "@/layouts/MainLayout";
import React, { useContext, useEffect, useState } from "react";
import QuestionsList from "./QuestionsList";

export default function GameComponent() {
  const { user, getUserFromLocalStorage } = useContext(UserContext);

  const [userGameData, setUserGameData] = useState({
    carnet: "",
    name: "",
    points: 0,
  });

  const [questionsData, setQuestionsData] = useState(null);

  useEffect(() => {
    const user = getUserFromLocalStorage();
    fetchQuestions();
    setUserGameData(user);
  }, []);

  const fetchQuestions = async () => {
    const baseUrl = "http://localhost:3300/api/v1";
    try {
      const response = await fetch(baseUrl + "/questions");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setQuestionsData(result.questions);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <MainLayout>
      <QuestionsList questions={questionsData} />
    </MainLayout>
  );
}
