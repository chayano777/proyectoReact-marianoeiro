import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RiseLoader from "react-spinners/RiseLoader";
import { BsEmojiWink } from "react-icons/bs";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";


const spinner = () => {
   return (
      <div className="mt-5 text-center">
         <RiseLoader color='#FBCB14' size={8} />
      </div>
   )
}


const Checkout = ({ products, total, clickClear }) => {
      console.log(products);
   const { register, handleSubmit } = useForm();

   const [visible, setVisible] = useState(true);

   const [id, setId] = useState();

   const clickCheckout = (data) => {
      
      if (products.length > 0) {
         const ventasCollection = collection(db, 'ventas');
         addDoc(ventasCollection, {
            data,
            products: products,
            total: total,
            date: serverTimestamp()
         }).then((r) => setId(r.id));
         clickClear();
         setVisible(false);
      } else {
         setVisible(false);
         console.log('salio');
      }
   }


   return (
      <>
         {(visible) ?
            <div className="flex mt-10 mb-28 items-center justify-start bg-white px-10 lg:px-0">
               <div className="mx-auto w-full max-w-lg">
                  <h1 className="text-4xl font-medium">Finalizar compra</h1>
                  <p className="mt-3">Complete los siguientes datos para finalizar la compra</p>

                  <form onSubmit={handleSubmit(clickCheckout)} className="mt-10">
                     <div className="grid gap-6 sm:grid-cols-2">
                        <div className="relative z-0">
                           <input type="text" {...register('name')} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
                           <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu nombre</label>
                        </div>
                        <div className="relative z-0">
                           <input type="text" {...register('lastName')} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
                           <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu apellido</label>
                        </div>
                        <div className="relative z-0">
                           <input type="text" {...register('email')} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
                           <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu email</label>
                        </div>
                        <div className="relative z-0">
                           <input type="text" {...register('phone')} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " required />
                           <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Tu teléfono</label>
                        </div>
                     </div>
                     <button type="submit" className="mt-5 bg-blue-600 text-white text-base px-8 py-2 rounded-md hover:bg-blue-500">Finalizar compra</button>
                    
                  </form>

               </div>
            </div>
            :
            <div className="flex mt-10 mb-28 items-center justify-start bg-white px-10 lg:px-0">
               <div className="mx-auto w-full max-w-lg text-center">
                  <BsEmojiWink className="w-full text-6xl my-10" />
                  <h1 className="text-2xl lg:text-4xl font-medium">Gracias por tu compra</h1>
                  <p className="mt-3">El número de comprobante de tu compra es:</p>
                  {!id ? spinner()
                     : <>
                        <p className="mt-3 text-lg font-medium">{id}</p>
                        <Link to='/' className="text-blue-500 text-sm mt-10">Volver</Link>
                     </>
                  }
               </div>
            </div>
         }
      </>
   )
}

export default Checkout