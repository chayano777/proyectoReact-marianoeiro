import Item from "./Item"

const ItemList = ({items}) => {
  return (
    <>
        <div className="flex flex-wrap gap-10">
        {items.slice(0,4).map((item, index)=> <Item key={index} item={item} />)}
        </div>
    </>
  )
}

export default ItemList