import { useState, useEffect } from "react";
import ItemList from './ItemList'

const ItemListContainer = ({ mensaje }) => {
 
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=ropa%20bebe')
      .then(Response => Response.json())
      .then(json => setItems(json.results))
      .catch(err=>console.log(err))
  }, [])


  return (
    <>
      <h1 className="text-3xl text-center p-5">{mensaje}</h1>  
        <div className="container mx-40 mt-10">
          <ItemList items={items} />  
        </div>
        
    </>
  );
};

export default ItemListContainer;
