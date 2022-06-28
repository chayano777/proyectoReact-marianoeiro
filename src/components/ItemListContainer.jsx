import ItemCount from "./ItemCount";

const ItemListContainer = ({ mensaje }) => {
  const onAdd = () => {
    alert(`Gracias por tu compra!!!`);
  };

  return (
    <>
      <h1 className="text-3xl text-center p-5">{mensaje}</h1>
      <div className="flex justify-center">
        <ItemCount stock={7} onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemListContainer;
