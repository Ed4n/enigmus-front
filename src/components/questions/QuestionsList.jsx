import { Question } from "./Question";
import { AddQuestion } from "./AddQuestion";
import React, { useEffect, useState } from "react";

export default function QuestionsList() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "https://enigmus-api.vercel.app/api/v1/questions"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setQuestions(result.questions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[90%] max-w-[850px] flex flex-col justify-center items-center gap-4 text-sphinx-yellow-700 text-lg">
      <div className="flex w-full bg-sphinx-yellow-200 px-5 py-1 rounded-full ">
        <div className="flex  items-center  w-[80%]">Pregunta</div>
        <div className="flex  items-center  w-[20%]">Respuesta</div>
      </div>
      <div className="w-full flex flex-col justify-start items-center bg-sphinx-yellow-100  rounded-md shadow-lg max-h-[500px] overflow-y-scroll overflow-x-hidden ">
        {questions ? (
          questions.map((question, i) => {
            return <Question i={i} question={question} />;
          })
        ) : (
          <> Loading Questions</>
        )}

        <AddQuestion />
      </div>
    </div>
  );
}
