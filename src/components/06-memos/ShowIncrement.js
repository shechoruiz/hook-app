import React from "react";
import PropType from "prop-types";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volví a generar :(");

  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropType.func.isRequired,
};

export default ShowIncrement;
