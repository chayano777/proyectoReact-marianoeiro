import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setcount] = useState(initial);
  const add = () => {
    count < stock && setcount(count + 1);
    count >= stock && alert("No hay mas unidades");
  };

  const click = () => {
    onAdd(count);
  }

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
        className="mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
        text-slate-800 bg-orange-200 hover:bg-stone-300 hover:border-stone-300 text-center"
        onClick={click}>
        Añadir al carrito
      </button>
    </>
  );
};

export default ItemCount;
