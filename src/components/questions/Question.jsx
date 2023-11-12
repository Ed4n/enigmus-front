import React, { useRef, useState } from "react";
import { ConfirmationActions } from "./ConfirmationActions";
export function Question({ i, question }) {
  const [enableEdit, setEnableEdit] = useState(false);
  const [questionEdit, setQuestionEdit] = useState({
    _id: "",
    question: question.question,
    answer: false,
  });

  const focusEditing = useRef(null);

  function patchQuestionFetch() {
    const url = "https://enigmus-api.vercel.app/api/v1/questions";

    fetch(url, {
      method: "PATCH",
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

  const toggleEnableEdit = (id) => {
    setEnableEdit(true);
    console.log(id);
    try {
      setTimeout(() => {
        focusEditing.current.focus();
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancelEdit = () => {
    setEnableEdit(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(questionEdit);
    setQuestionEdit({
      ...questionEdit,
      question: value,
    });
  };

  return (
    <div
      className={
        (enableEdit
          ? " bg-sphinx-yellow-200"
          : "bg-sphinx-yellow-100 hover:bg-sphinx-yellow-200/50") +
        " w-full border-b-[0.5px] border-sphinx-yellow-500    "
      }
    >
      <div
        className={
          (enableEdit ? " -ml-[20%]" : " ") +
          " w-[120%]  flex transition-all relative "
        }
      >
        <button
          onClick={() => toggleEnableEdit(questionEdit._id)}
          className={
            (enableEdit ? "ml-[16%]" : " ") +
            " w-full h-full  pl-5 py-3 text-left flex items-start justify-start"
          }
        >
          {enableEdit ? (
            <input
              type="text"
              onChange={handleChange}
              ref={focusEditing}
              value={questionEdit.question}
              className="flex w-[78%] bg-transparent  pl-5 outline-none placeholder:text-sphinx-yellow-700/70"
            />
          ) : (
            <div className="flex  items-center   w-[80%]">
              <span className="mr-2">{i + 1}. </span> {question.question}
            </div>
          )}
          <div className="flex  items-center  w-[20%]">
            {JSON.stringify(question.answer)}
          </div>
        </button>

        <ConfirmationActions cancelAction={handleCancelEdit} />
      </div>
    </div>
  );
}
