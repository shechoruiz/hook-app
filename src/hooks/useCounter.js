import { useState } from "react";

const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState);

  const increment = (factor = 1) => {
    setState(state + factor);
  };

  const decrement = (factor = 1) => {
    setState(state - factor);
  };

  const reset = () => {
    setState(initialState);
  };

  return {
    increment,
    decrement,
    reset,
    state,
  };
};

export default useCounter;
