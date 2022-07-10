import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {FadeLoader} from "react-spinners";

const spinner = () => {
  return (
    <div className="mt-40 text-center">
      <FadeLoader color="#D0021B" size={40} />
    </div>
  );
};

const ItemListContainer = ({ mensaje }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=ropa%20bebe")
      .then((Response) => Response.json())
      .then((json) => setItems(json.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="text-3xl text-center p-5">{mensaje}</h1>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {!items ? spinner() : <ItemList items={items} />}
      </div>
    </>
  );
};

export default ItemListContainer;
