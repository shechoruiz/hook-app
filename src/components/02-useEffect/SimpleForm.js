import React, { useEffect, useState } from "react";
import "../../css/effect.css";

const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log("Hey");
  }, []);

  useEffect(() => {
    console.log("El formState cambió");
  }, [formState]);

  useEffect(() => {
    console.log("El email cambió");
  }, [email]);

  const handleInptutChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>SimpleForm - UseEffect</h1>
      <hr />
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          autoComplete="off"
          value={name}
          onChange={handleInptutChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-control"
          autoComplete="off"
          value={email}
          onChange={handleInptutChange}
        />
      </div>
    </>
  );
};

export default SimpleForm;
