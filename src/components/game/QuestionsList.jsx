import { UserContext } from "@/context/UserContext";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function QuestionsList({
  questions,
  slideCounter,
  setSlideCounter,
}) {
  const { user, setUser } = useContext(UserContext);
  const divRef = useRef(null);
  const questionRef = useRef(null);

  const handleFalse = (questionId) => {
    const id = questions.findIndex((item) => item._id === questionId);
    const questionAnswer = questions[id].answer;
    if (!questionAnswer) {
      setUser({ ...user, points: user.points + 1 });
    }
    console.log(id);
    handleNextQuestion();
  };

  const handleTrueAnswer = (questionId) => {
    const id = questions.findIndex((item) => item._id === questionId);
    const questionAnswer = questions[id].answer;
    if (questionAnswer) {
      setUser({ ...user, points: user.points + 1 });
    }

    handleNextQuestion();
  };

  const handleNextQuestion = (e) => {
    const slidesAmout = slideCounter + 100;
    setSlideCounter(slidesAmout);
    divRef.current.style.marginLeft = ` -${slideCounter}%`;
  };

  return (
    <>
      <h1>Points: {user.points}</h1>

      {questions ? (
        <div className=" w-[90%] lg:w-[90%] text-sphinx-yellow-900   overflow-hidden transition-all rounded-md">
          <div
            ref={divRef}
            className=" w-[1000%] h-full  flex transition-all duration-300 rounded-md "
          >
            {questions.map((question) => {
              return (
                <div
                  className="  w-full h-full flex flex-col justify-center  items-center gap-5 transition-all p-5 relative"
                  ref={questionRef}
                  key={question._id}
                >
                  <div className=" w-[90%] md:w-[70%] bg-sphinx-yellow-100 p-5 ">
                    {question.question}
                  </div>

                  {/* Answer Buttons */}
                  <div className="flex justify-around gap-5 w-[70%] max-w-[600px]  ">
                    <AnswerButton
                      value={false}
                      handleNextQuestion={() => handleFalse(question._id)}
                    >
                      Falso
                    </AnswerButton>

                    <AnswerButton
                      value={true}
                      handleNextQuestion={() => handleTrueAnswer(question._id)}
                    >
                      Verdadero
                    </AnswerButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <p className=" text-sphinx-yellow-900 text-xl">Loading...</p>
      )}
    </>
  );
}

function AnswerButton({ handleNextQuestion, children, value }) {
  return (
    <button
      onClick={handleNextQuestion}
      value={value}
      className="w-1/2 max-w-[300px] bg-sphinx-yellow-300 text-sphinx-yellow-900 text-lg  flex justify-center items-center px-5 py-3 rounded-md hover:bg-sphinx-yellow-400 hover:text-sphinx-yellow-50 hover:shadow-md hover:scale-105 transition-all "
    >
      {children}
    </button>
  );
}
