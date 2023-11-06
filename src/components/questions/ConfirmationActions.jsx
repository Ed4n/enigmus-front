import React from "react";
export function ConfirmationActions({ cancelAction, acceptAction }) {
  return (
    <div className=" w-full md:w-[20%] h-full flex">
      {/* Cancel */}
      <button
        onClick={cancelAction}
        className=" bg-sphinx-yellow-400 w-1/2 py-3 h-full flex justify-center items-center hover:w-full transition-all"
      >
        <svg
          className="fill-white w-[30px] h-[30px]"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
        </svg>
      </button>

      {/* Post User */}
      <button
        onClick={acceptAction}
        className=" bg-sphinx-yellow-600 w-1/2 py-3 h-full flex justify-center items-center hover:w-full transition-all"
      >
        <svg
          className="fill-white w-[30px] h-[30px]"
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2.25 12.321 7.27 6.491c.143.127.321.19.499.19.206 0 .41-.084.559-.249l11.23-12.501c.129-.143.192-.321.192-.5 0-.419-.338-.75-.749-.75-.206 0-.411.084-.559.249l-10.731 11.945-6.711-5.994c-.144-.127-.322-.19-.5-.19-.417 0-.75.336-.75.749 0 .206.084.412.25.56"
            fill-rule="nonzero"
          />
        </svg>
      </button>
    </div>
  );
}
