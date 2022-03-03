import React from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const MainApp = () => {
  const user = {
    id: 1234,
    name: "Sergio",
    email: "ejemplo@email.com",
  };

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
