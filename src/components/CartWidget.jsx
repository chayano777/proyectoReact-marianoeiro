import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const CartWidget = () => {
  const { quantyProd } = useContext(cartContext);
  console.log(quantyProd);

  return (
    <div className="flex">
      <div className="flex relative ml-5">
        <div className="">
          <BsCart4 className="text-2xl mx-4" />
        </div>
        {quantyProd !== 0 ? (
          <div className="absolute -top-2 -right-0 bg-orange-700 rounded-full h4 w-4 font-medium text-xs text-center text-white">
            <p>{quantyProd}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartWidget;
