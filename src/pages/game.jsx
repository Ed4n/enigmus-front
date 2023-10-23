import React, { useEffect } from "react";

export default function game() {
  useEffect(() => {
    console.log(localStorage.getItem("user"));
  }),
    [];

  return <div></div>;
}
