import React, { useLayoutEffect, useRef, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

import "../../css/layout.css";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h2>Layout Effect</h2>
      <hr />

      <blockquote className="blockquote text-end">
        <p className="mb-4" ref={pTag}>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
    </div>
  );
};

export default Layout;
