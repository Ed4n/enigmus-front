import React from "react";

export default function MainLayout({ children }) {
  return (
    <div className=" w-full h-screen flex flex-col gap-5 justify-center items-center bg-sphinx-yellow-50">
      {children}
    </div>
  );
}
