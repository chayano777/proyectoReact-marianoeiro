import { useParams } from "react-router-dom";

const Cart = () => {
    const {carrito} = useParams();

  return (
    <div className="text-center text-2xl">CODER HOUSE</div>
  )
}

export default Cart