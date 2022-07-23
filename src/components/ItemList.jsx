import Item from "./Item"

const ItemList = ({items}) => {
  return (
    <>
        <div className="grid grid-cols-1 gap-y-20 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-20">
        {items.slice(0,4).map((item, index)=> <Item key={index} item={item} />)}
        </div>
    </>
  )
}

export default ItemList