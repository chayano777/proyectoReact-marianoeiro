import { createContext, useState } from "react"


export const context = createContext([{name:'Mariano'}, {name:'Lucca'}])

const CartProvider = ({children}) => {

 return ( 

     <>
        {children}
    </>
    
    
    )
}

export default CartProvider
