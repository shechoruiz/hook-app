import React from "react";
import "../../css/counter.css";

import useCounter from "../../hooks/useCounter";

const CounterWithCustomHook = () => {
  const { increment, decrement, reset, state } = useCounter();

  return (
    <>
      <h1>Counter with hook: {state} </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      {"\t"}
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      {"\t"}
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};

export default CounterWithCustomHook;
