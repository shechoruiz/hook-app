import React, { useRef } from "react";
import "../../css/effect.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        className="form-control mb-5"
        placeholder="Su nombre"
        ref={inputRef}
      />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
