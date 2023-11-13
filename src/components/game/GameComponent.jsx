import { Results } from "./Results";
import { UserContext } from "@/context/UserContext";
import MainLayout from "@/layouts/MainLayout";
import React, { useContext, useEffect, useState } from "react";
import QuestionsList from "./QuestionsList";
import Button from "../Button";
import { useRouter } from "next/router";

export default function GameComponent() {
  const { user, setUser, getUserFromLocalStorage } = useContext(UserContext);
  const [slideCounter, setSlideCounter] = useState(100);

  const router = useRouter();
  const baseUrl = "https://enigmus-api.vercel.app/api/v1";

  const [userGameData, setUserGameData] = useState({
    carnet: "",
    name: "",
    points: 0,
  });

  const [questionsData, setQuestionsData] = useState(null);

  useEffect(() => {
    const userLocalStorage = getUserFromLocalStorage();
    fetchQuestions();
    setUser(userLocalStorage);
  }, []);

  useEffect(() => {
    postUser();
    console.log(JSON.stringify(user));
  }, [slideCounter]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(baseUrl + "/questions/randomQuestions");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setQuestionsData(result.questions);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  function postUserFetch() {
    const url = baseUrl + "/players";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("POST request successful:", responseData);
      })
      .catch((error) => {
        console.error("POST request error:", error);
      });
  }

  const postUser = () => {
    if (slideCounter === 1100) postUserFetch();
  };

  const pushToUser = () => {
    router.push("/user-page");
  };

  const pushToLeaderboard = () => {
    router.push("/leaderboard");
  };

  return (
    <MainLayout>
      {slideCounter === 1100 ? (
        <Results
          user={user}
          pushToUser={pushToUser}
          pushToLeaderboard={pushToLeaderboard}
        />
      ) : (
        <QuestionsList
          questions={questionsData}
          slideCounter={slideCounter}
          setSlideCounter={setSlideCounter}
        />
      )}
    </MainLayout>
  );
}
