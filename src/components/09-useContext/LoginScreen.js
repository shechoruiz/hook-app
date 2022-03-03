import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  const data = {
    id: 123,
    name: "Sergio",
  };

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(data)}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
