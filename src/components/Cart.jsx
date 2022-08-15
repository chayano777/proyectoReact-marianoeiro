import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { useContext, useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Checkout from "./Checkout";

const Cart = () => {
  const { products, removeItem, clearItem } = useContext(cartContext);

  const [total, setTotal] = useState(0);

  const [checkout, setCheckout] = useState(false);

  
  useEffect (() => {
    let a = 0;
    products.forEach((item) => {
      a +=item.price * item.cantidad
    });
    setTotal(a);
  },[products]);
  

  const clickRemove = (id) => {
    removeItem(id);
  };

  const clickClear = () => {
    clearItem();
  };

  const clickCheckout = (value) => {
    setCheckout(value);
  };

  return (
    <>
      {!checkout ? (
        <>
          <div className="text-2xl mt-10 mb-10 text-center">CARRITO</div>
          <div className="p-4 border rounded-lg border-slate-900 shadow-lg mx-auto">
            {products.length === 0 ? (
              <>
                <div className="text-2xl mt-10 text-center">
                  El CARRO esta vacio!!!
                </div>
                <div className="mt-10 text-center">
                  <Link
                    to="/category/mixbebe"
                    className="mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-orange-200 hover:bg-orange-400 hover:border-orange-400 text-center"
                  >
                    Volver
                  </Link>
                </div>
              </>
            ) : (
              products.map((item) => (
                <div
                  key={item.id}
                  className="flex mb-3 items-center justify-between px-60"
                >
                  <div className="w-3/5 ml-3 text-md">{item.title}</div>
                  <button onClick={() => clickRemove(item.id)}>
                    <FaTrash className="text-2xl text-orange-600" />
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
                  text-slate-800 bg-orange-200 hover:bg-orange-400 hover:border-orange-300 text-center"
                  >
                    Borrar Todo
                  </button>
                  <div className="text-center lg:text-right my-10">
                    <button
                      onClick={() => clickCheckout(true)}
                      className="bg-orange-200 border border-orange-400 text-slate-800 text-md font-medium mt-5 ml-4 py-2 px-3 lg:px-8 rounded-lg hover:bg-orange-400"
                    >
                      Comprar ahora
                    </button>
                  </div>
                </div>
                TOTAL ${total}
              </div>
            ) : null}
          </div>
        </>
      ) : null}
      {checkout ? (
        <Checkout
          products={products}
          total={total}
          clickClear={clickClear}
        />
      ) : null}
    </>
  );
};

export default Cart;
