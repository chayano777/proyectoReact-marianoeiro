import { createContext, useState, useEffect } from "react"


export const cartContext = createContext();
const {Provider} = cartContext;

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [quantyProd, setQuantyProd] = useState(0);

    useEffect(()=>{
        let cant = 0;
        products.forEach(product =>{
            cant += product.cantidad
        });
        setQuantyProd(cant);
    },[products])

    const addItem = (item) => {
        if(isInProducts(item.id)){
            const found = products.find(el => el.id === item.id)
            const index = products.indexOf(found);
            const flag = [...products];
            flag[index].cantidad += item.cantidad;
            setProducts(flag);
        }else {
            setProducts([...products, item]);
        }
    }

    const removeItem = (id) => {
        setProducts(products.filter(el => el.id !== id))
    }

    const clearItem = (item) => {
        setProducts([]);
    }

    const isInProducts = (id) => {
        return products.some(el => el.id === id);
    } 

 return ( 
     <Provider value={{products, addItem, removeItem, clearItem, quantyProd}}>
        {children}
     </Provider>
    )
}

export default CartProvider
