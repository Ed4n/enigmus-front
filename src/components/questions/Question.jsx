import React from "react";
export function Question({ i, question }) {
  return (
    <div className="w-full flex px-5  py-5 border-b-[0.5px] border-sphinx-yellow-500 bg-sphinx-yellow-100 hover:bg-sphinx-yellow-200/50 ">
      <button className="w-full h-full flex">
        <div className="flex  items-center  w-[80%]">
          <span className="mr-2">{i + 1}. </span> {question.question}
        </div>
        <div className="flex  items-center  w-[20%]">
          {JSON.stringify(question.answer)}
        </div>
      </button>
    </div>
  );
}
