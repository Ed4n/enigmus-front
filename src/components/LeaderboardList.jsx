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
    <div className=" w-[90%] sm:w-full max-w-[800px] max-h-[600px] overflow-y-scroll flex  flex-col bg-sphinx-yellow-100 rounded-md shadow-md p-5 text-sphinx-yellow-800 ">
      <div className="flex w-full bg-sphinx-yellow-200 px-5 py-1 rounded-full ">
        <div className="flex  items-center  w-[30%]">Carnet</div>
        <div className="flex  items-center  w-[40%]">Nombre</div>
        <div className="flex  items-center  w-[30%]">Puntos</div>
      </div>
      {data.players.map((item) => (
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="flex w-full max-w-[1000px] border-b-[1px] gap-2 border-sphinx-yellow-200 ">
            <div className="flex  items-center p-5 w-[30%]">{item.carnet}</div>
            <div className="flex  items-center p-5 w-[40%]">{item.name}</div>
            <div className="flex  items-center p-5 w-[30%]">
              <b>{item.points}</b>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>loading...</div>
  );
}
