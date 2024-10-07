// components/ShoppingCart.js

import { removeFromCart } from "../store/cartSlice";
import Image from "next/image";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

export default function ShoppingCartItem({ data }) {
   // const p = data.attributes;

   const dispatch = useDispatch();

   console.log(data);

   const updateCartItem = (e, key) => {
      let payload = {
         key,
         val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
         id: data.id,
      };
      dispatch(updateCart(payload));
   };

   return (
      <div className="flex py-5 gap-3  border-b">
         <div className="shrink-0 aspect-square w-[80px] md:w-[120px]">
            <Image src={data.image} alt={data.name} width={120} height={120} />
         </div>

         <div className="w-full flex flex-col">
            <div className="flex flex-col justify-between">
               <div className="text-sm md:text-md font-bold text-black/[0.8]">{data.name}</div>
               <div className="text-sm md:text-md font-bold text-black/[0.8] mt-2">Price : &#8377;{data.price * data.quantity}</div>
            </div>

            {/* <div className="text-md font-medium text-black/[0.5] hidden md:block">{""}</div> */}

            <div className="flex items-center justify-between mt-2">
               <div className="font-bold text-black/[0.8]">Quantity: {data.quantity}</div>
               <RiDeleteBin6Line
                  onClick={() => dispatch(removeFromCart({id:data.id}))}
                  className="cursor-pointer text-black/[0.8] hover:text-black text-[16px] md:text-[20px]"
               />
            </div>
         </div>
      </div>
   );
}
