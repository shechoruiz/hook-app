import React, { useState } from "react";
import "../../css/counter.css";

const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
  });

  const { counter1, counter2 } = counter;

  return (
    <>
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ ...counter, counter1: counter1 + 1 })}
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
