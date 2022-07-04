

const Item = ({item}) => {
  return (
    
    <div className="flex p-4 border rounded-lg shadow-lg">
        <img src={item.thumbnail} alt="Imagen" />
        <div className="mx-4">
            {item.title}
            <div>Stock Disponible: {item.available_quantity}</div> 
            <div className=""></div>
               
        </div>     
    </div>
  )
}

export default Item