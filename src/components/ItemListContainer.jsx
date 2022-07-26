import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {FadeLoader} from "react-spinners";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore"


const spinner = () => {
  return (
    <div className="mt-40 text-center">
      <FadeLoader color="#D0021B" size={40} />
    </div>
  );
};

const ItemListContainer = ({ mensaje }) => {
  const [items, setItems] = useState([]);
  const {categoryN} = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const q = query(itemCollection, where('category', '==', 'accesoriobebe'));
    getDocs(q)
    .then( result =>{
      const lista = result.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      setItems(lista);
      console.log(lista);
    })
    .catch((err) => console.log(err))

    /*fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categoryN ? categoryN : 'ropa%20bebe'}`)
      .then((Response) => Response.json())
      .then((json) => setItems(json.results))
      .catch((err) => console.log(err));*/
  }, [categoryN]);

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
