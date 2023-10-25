import React, { createContext, useState } from "react";

// Instancia del context
const UserContext = createContext();

// Provider
function UserProvider({ children }) {
  const [user, setUser] = useState({
    carnet: "",
    name: "",
    points: 0,
  });

  const [slidesAmout, setSlidesAmout] = useState(0);

  const setUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setUserToLocalStorage,
        removeUserFromLocalStorage,
        getUserFromLocalStorage,
        slidesAmout,
        setSlidesAmout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
