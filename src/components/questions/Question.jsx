import React, { useRef, useState } from "react";
import { ConfirmationActions } from "./ConfirmationActions";
export function Question({ i, question }) {
  const [enableEdit, setEnableEdit] = useState(false);
  const focusEditing = useRef(null);

  const toggleEnableEdit = () => {
    setEnableEdit(true);
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
          onClick={toggleEnableEdit}
          className={
            (enableEdit ? "ml-[16%]" : " ") +
            " w-full h-full  pl-5 py-3 text-left flex items-start justify-start"
          }
        >
          {enableEdit ? (
            <input
              type="text"
              ref={focusEditing}
              value={question.question}
              className="flex w-[78%] bg-transparent  pl-5 outline-none"
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
