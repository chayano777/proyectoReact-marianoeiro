import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext} from '../context/CartContext';




const ItemDetail = ({item}) => {
  const [cantidad, setCantidad] = useState(0);
  const {addItem} = useContext(cartContext);

  const onAdd = (cantidad) => {
    setCantidad(cantidad)
    addItem({...item, cantidad: cantidad});
  }

  return (
    <div className='flex p-4 border rounded-lg shadow-lg'>
      <img className="w-1/3" src={item.pictures[0].url} alt="Imagen" />
      <div className="mt-2 mx-5">
        <h3 className="text-sm text-black">{item.title}</h3>
        <div>Stock Disponible: {item.available_quantity}</div>
        <div className="flex flex-col w-3/4 px-10 py-4 align-bottom">
          <p className="mt-1 text-xl text-gray-900 text-right">
            $ {item.price}
          </p>
          <div>
            { (cantidad) ? <div className='mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-orange-200 hover:bg-stone-300 hover:border-stone-300 text-center'>  
            <Link to={"/carrito"} >
              Finalizar compra</Link>
              </div>
            :
            <ItemCount stock={item.available_quantity} initial={1} onAdd={onAdd} />

          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail