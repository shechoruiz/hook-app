import React from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

import "../../css/effect.css";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  console.log(author, quote);

  return (
    <div>
      {/* <h1>Custom Hooks!!!</h1> */}
      <h2>Breaking Bad Quotes</h2>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-4">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
