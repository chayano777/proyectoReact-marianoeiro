import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { CircleLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDoc, doc, collection, query, where } from "firebase/firestore";

const spinner = () => {
  return (
    <div className="mt-40 text-center">
      <CircleLoader color="#FBCB14" size={40} />
    </div>
  );
};

const ItemDetailContainer = () => {
  const { id } = useParams([]);
  const [item, setItem] = useState();

  
  useEffect(() => {
	const itemCollection = collection(db, "productos");
	const refDoc = doc(itemCollection, id);
  getDoc(refDoc)
    .then((result) => {
      const producto = {
          id: result.id,
          ...result.data(),
      }
      setItem(producto);
    });
    /*fetch(`https://api.mercadolibre.com/items/${id}`)
		  .then((Response) => Response.json())
		  .then((json) => setItem(json))
		  .catch((err) => console.log(err));*/
  }, [id]);

  return (
    <>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {!item ? spinner() : <ItemDetail item={item} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
