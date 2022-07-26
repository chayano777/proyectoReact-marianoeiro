import { Link } from "react-router-dom";



const Item = ({ item }) => {


  return (
    <div className="flex p-4 border rounded-lg shadow-lg">
      <img className="w-1/3" src={item.thumbnail} alt="Imagen" />
      <div className="mt-2 mx-5">
        <h3 className="text-sm text-black">{item.title}</h3>
        <div>Stock Disponible: {item.stock}</div>
        <div className="flex flex-col w-3/4 px-10 py-4 align-bottom">
          <p className="mt-1 text-xl text-gray-900 text-right">
            $ {item.price}
          </p>
          <Link to={item.id}
            className="mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-orange-200 hover:bg-stone-300 hover:border-stone-300 text-center">
            Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
