import React from 'react'


const ItemDetail = ({item}) => {
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
        </div>
      </div>
    </div>
  )
}

export default ItemDetail