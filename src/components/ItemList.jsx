import Item from "./Item"

const ItemList = ({items}) => {
  return (
    <>
        <div className="flex gap-10">
        {items.slice(0,2).map((item, index)=> <Item key={index} item={item} />)}
        </div>
    </>
  )
}

export default ItemList