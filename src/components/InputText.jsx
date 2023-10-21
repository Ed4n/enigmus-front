import React from "react";
export function InputText({ func, placeholder }) {
  return (
    <input
      className="w-[80%] max-w-[400px] px-3 py-4 bg-sphinx-yellow-100 text-sphinx-yellow-800 placeholder:text-sphinx-yellow-900/70 focus:bg-sphinx-yellow-200/80 focus:scale-105 focus:shadow-md transition-all outline-none rounded-sm"
      type="text"
      required
      placeholder={placeholder}
      onChange={func}
    />
  );
}
