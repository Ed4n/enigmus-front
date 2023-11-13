import React, { useEffect, useState } from "react";

export default function LeaderboardList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const baseUrl = "https://enigmus-api.vercel.app/api/v1";
      try {
        const response = await fetch(baseUrl + "/players/highest");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return data ? (
    <div className="w-[90%] sm:w-full max-w-[800px] flex  flex-col bg-sphinx-yellow-100 p-5 rounded-md shadow-lg gap-3 text-sphinx-yellow-800">
      <div className="flex w-full bg-sphinx-yellow-200 px-5 py-1 rounded-full ">
        <div className="flex  items-center  w-[30%]">Carnet</div>
        <div className="flex  items-center  w-[40%]">Nombre</div>
        <div className="flex  items-center  w-[30%]">Puntos</div>
      </div>
      <div className=" w-full  max-w-[800px] flex  flex-col bg-sphinx-yellow-100   overflow-y-scroll max-h-[700px]">
        {data.players.map((item) => (
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="flex w-full max-w-[1000px] border-b-[1px] gap-2 border-sphinx-yellow-200 ">
              <div className="flex  items-center p-5 w-[30%]">
                {item.carnet}
              </div>
              <div className="flex  items-center p-5 w-[40%]">{item.name}</div>
              <div className="flex  items-center p-5 w-[30%]">
                <b>{item.points}</b>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>loading...</div>
  );
}
