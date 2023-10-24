import React, { createContext, useState } from "react";

// Instancia del context
const ApiContext = createContext();

// Provider
function ApiContext({ children }) {
  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
}

export { UserContext, UserProvider };
