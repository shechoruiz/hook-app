import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";

import "../../css/effect.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="brn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
