import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { getDiscountedPricePercentage } from "../utils/helper";
import { CartItem } from "./CartItem";

const ProductCard = ({ data }) => {
   const [isOpen, setIsOpen] = useState(false);
   const discountedPrice = data.price - (data.price * data.discountPercentage) / 100;
   const discountedPricePercentage = getDiscountedPricePercentage(data.price, discountedPrice);

   return (
      <div className="bg-white shadow rounded overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out ">
         <div className="">
            <CartItem
               isOpen={isOpen}
               closeModel={() => setIsOpen(false)}
               searchShoes={data}
               className="flex justify-center items-center z-20"
            />
         </div>
         <button onClick={() => setIsOpen(true)} className="w-full">
            <div className="bg-white shadow rounded overflow-hidden hover:scale-105 transition-all duration-200 ease-in-out "></div>
            <div className="relative">
               <div className="w-full h-72 md:h-80 group-hover:opacity-75  "></div>
               <Image
                  src={data.image}
                  alt={data.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
               />
            </div>
            <div className="flex justify-between p-4">
               <div className="flex flex-col">
                  <p className="text-lg font-bold">{data.name}</p>
               </div>
               <div>
                  <p className="text-lg font-bold text-orange-500">${discountedPrice}</p>
                  <p className="text-gray-500 line-through">${data.price}</p>
                  <p className="text-gray-500">{discountedPricePercentage}% off</p>
               </div>
            </div>
         </button>
      </div>
   );
};

export default ProductCard;
