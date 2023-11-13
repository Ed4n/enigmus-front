import { ConfirmationActions } from "./ConfirmationActions";
import React, { useRef, useState } from "react";
export function AddQuestion({}) {
  const [addQuestionOpen, setAddQuestionOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    answer: false,
  });

  const focusAdd = useRef(null);

  function postQuestionFetch() {
    const url = "https://enigmus-api.vercel.app/api/v1/questions";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
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

  // HANDLRES // =================================================
  const handleAddQuestionOpen = () => {
    setAddQuestionOpen(!addQuestionOpen);
    try {
      setTimeout(() => {
        focusAdd.current.focus();
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewQuestion({
      ...newQuestion,
      question: value,
    });

    console.log(newQuestion);
  };

  const toggleAnswer = () => {
    setNewQuestion((prevState) => ({
      ...prevState,
      answer: !prevState.answer, // Toggle the 'answer' value
    }));
  };

  const handlePostQuestion = () => {
    postQuestionFetch();
    handleAddQuestionOpen();
    setTimeout(() => {
      window.location.reload(true);
    }, 100);
  };

  return (
    <>
      {/* Add Question Form */}
      <div
        className={
          (addQuestionOpen ? "flex" : "hidden") +
          " group w-full  flex flex-col md:flex-row justify-center items-center  border-b-[0.5px] border-sphinx-yellow-500 bg-sphinx-yellow-200   "
        }
      >
        {/* Question Form */}
        <div className="flex w-full md:w-[80%]  py-5">
          <input
            ref={focusAdd}
            onChange={handleChange}
            type="text"
            className="flex w-[78%] bg-transparent  pl-5 outline-none"
          />
          <button
            onClick={toggleAnswer}
            className="flex  items-center  w-[20%]"
          >
            {JSON.stringify(newQuestion.answer)}
          </button>
        </div>

        {/* Confirmation Buttons */}
        <ConfirmationActions
          cancelAction={handleAddQuestionOpen}
          acceptAction={handlePostQuestion}
        />
      </div>

      {/* Add Question Button */}
      <button
        onClick={handleAddQuestionOpen}
        className=" group w-full flex justify-center items-center  py-5 border-b-[0.5px] border-sphinx-yellow-500 bg-sphinx-yellow-100 text-xl hover:bg-sphinx-yellow-200/50  "
      >
        <span
          className={
            (addQuestionOpen ? "rotate-45" : "") +
            " w-[30px] h-[30px] group-hover:bg-sphinx-yellow-700 group-hover:text-white hover:scale-125 transition-all duration-300 rounded-full"
          }
        >
          +
        </span>
      </button>
    </>
  );
}
