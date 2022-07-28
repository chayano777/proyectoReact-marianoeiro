import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const { products, removeItem, clearItem } = useContext(cartContext);

  const addTotal = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price * item.cantidad;
    });
    return total;
  };

  const clickRemove = (id) => {
    removeItem(id);
  };

  const clickClear = () => {
    clearItem();
  };

  return (
    <>
      <div className="text-2xl mt-10 mb-10 text-center">CARRITO</div>
      <div className="p-4 border rounded-lg border-slate-900 shadow-lg mx-auto">
        {products.length === 0 ? (
          <>
            <div className="text-2xl mt-10 text-center">
              El CARRO esta vacio!!!
            </div>
            <div className="mt-10 text-center">
              <Link to="/category/mixbebe" className="mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-orange-200 hover:bg-stone-300 hover:border-stone-300 text-center">
                Volver
              </Link>
            </div>
          </>
        ) : (
          products.map((item) => (
            <div
              key={item.id}
              className="flex mb-3 items-center justify-between px-60">
              <div className="w-3/5 ml-3 text-md">{item.title}</div>
              <button onClick={() => clickRemove(item.id)}>
                <FaTrash className="text-2xl" />
              </button>
              <div className="w-1/5 ml-3 text-lg text-center">
                Cantidad: {item.cantidad}
              </div>
              <div className="w-1/5 ml-3 text-lg text-right font-medium">
                {"$ " + item.price * item.cantidad}
              </div>
            </div>
          ))
        )}
        {products.length !== 0 ? (
          <div className="text-right text-xl font-medium px-20 mt-10">
              <div className="flex items-center">
                <button
                  onClick={() => clickClear()}
                  className="mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-orange-200 hover:bg-stone-300 hover:border-stone-300 text-center">
                  Borrar Todo
                </button>
              </div>
            TOTAL ${addTotal()}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
