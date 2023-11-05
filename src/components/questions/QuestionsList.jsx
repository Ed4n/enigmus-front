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
      <div className="w-full flex flex-col justify-start items-center bg-sphinx-yellow-100 px-5 rounded-md py-3 max-h-[500px] overflow-y-scroll ">
        {questions ? (
          questions.map((question) => {
            return (
              <div className="w-full flex  py-5 border-b-[0.5px] border-sphinx-yellow-500 bg-sphinx-yellow-100 ">
                <div className="flex  items-center  w-[80%]">
                  {" "}
                  {question.question}
                </div>
                <div className="flex  items-center  w-[20%]">
                  {JSON.stringify(question.answer)}
                </div>
              </div>
            );
          })
        ) : (
          <> Loading Questions</>
        )}

        <button className=" group w-full flex justify-center items-center  py-5 border-b-[0.5px] border-sphinx-yellow-500 bg-sphinx-yellow-100 text-xl hover:bg-sphinx-yellow-200/50  ">
          <span className=" w-[30px] h-[30px] group-hover:bg-sphinx-yellow-700 group-hover:text-white hover:scale-125 hover:rotate-[360deg] transition-all duration-300 rounded-full">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
