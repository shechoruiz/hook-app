import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "../../css/TodoApp.css";

const TodoApp = () => {
  const initialState = [
    {
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
    },
  ];

  const [todos, dispatch] = useReducer(todoReducer, initialState);
  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      // desc: e.target.value,
      desc: "Nueva tarea",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos?.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((item, i) => (
              <li key={i} className="list-group-item">
                <p className="text-center">
                  {i + 1}. {item.desc}
                </p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar to do</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              id=""
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
