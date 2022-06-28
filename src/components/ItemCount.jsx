import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setcount] = useState(initial);

  const add = () => {
    count < stock && setcount(count + 1);
    count >= stock && alert("No hay mas unidades");
  };

  const rest = () => {
    setcount(Math.max(count - 1, 1));
  };

  return (
    <>
      <div className="flex bg-orange-100 py-5 px-10">
        <button className="text-xl font-bolds" onClick={rest}>
          -
        </button>
        <p className="text-2xl font-bold px-4">{count}</p>
        <button className="text-xl font-bold" onClick={add}>
          +
        </button>
      </div>
      <button
        className="text-1xl font-bold p-3 text-white bg-red-400 bor"
        onClick={onAdd}
      >
        Comprar
      </button>
    </>
  );
};

export default ItemCount;
