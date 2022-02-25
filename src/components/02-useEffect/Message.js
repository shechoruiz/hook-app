import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);

    // Esta función a continuación esta destinada a realizar un cleanup, desmontaje o desuscripción a eventos de acuerdo a una necesidad especial
    // el ejemplo acá retira el eventlistener dado que consume mucha memoria si se monta y desmonta el componente muchas veces
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>Eres genial!</h3>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  );
};

export default Message;
