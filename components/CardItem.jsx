"use client";
import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import DetailsCarousel from "./BannerHero";
import Card from "./ProductCard";
import Menu from "./Menu";



function CardItem() {
   const [quantity, setQuantity] = useState(0);
   const [showError, setShowError] = useState(false);

   const addToCart = () => {};

   return (
      <div className="flex flex-col gap-4 md:h-[100%] md:flex-row xl:gap-x-28 md:p-28 md:justify-between md:my-auto">
         <div className="flex flex-col h-[50%] gap-y-6 md:w-[50%] xl:w-[45%] ">
          
          
         </div>
         <div className="flex flex-col px-8 gap-8 mb-6 md:w-[50%] md:gap-3 xl:gap-10 xl:pt-20 ">
            <div className="flex flex-col gap-5  md:p-">
               <p className="text-orange-500 font-extrabold pt-2">SNEAKER COMPANY</p>
               <h1 className="text-3xl font-bold">
                  Fall Limited Edition <br /> Sneakers
               </h1>
               <p className="text-slate-500">
                  These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
                  sole, they’ll withstand everything the weather can offer.
               </p>
               <div className="flex justify-between items-center gap-3 md:flex-col md:items-start ">
                  <div className="flex items-center gap-8">
                     <p className="font-bold text-3xl">$125.00</p>
                     <p className="text-orange-500 bg-orange-200 rounded-lg px-2">50%</p>
                  </div>
                  <p className="text-slate-500 line-through">$250.00</p>
               </div>
            </div>
            <div className="  md:flex xl:w-[100%] xl:items-center md:gap-8">
               <div className="flex justify-between mb-5 items-center bg-slate-100 rounded-lg p-3 xl:w-48 md:mb-0">
                  <button
                     className="flex items-center justify-center w-10 h-10  border-slate-300 rounded-full"
                     onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : null)}
                  >
                     <img src="/icon-minus.svg" alt="icon" />
                  </button>
                  <p>{quantity}</p>
                  <button
                     className="flex items-center justify-center w-10 h-10  border-slate-300 rounded-full"
                     onClick={() => setQuantity(quantity + 1)}
                  >
                     <img src="/icon-plus.svg" alt="icon" />
                  </button>
               </div>

               <div className="flex  items-center xl:w-[60%]">
                  <button
                     className="flex items-center justify-center gap-2 bg-orange-500 text-white rounded-lg p-4 w-[100%]"
                     onClick={() => {
                        if (!quantity) {
                           setShowError(true);
                        } else {
                           addToCart();
                        }
                     }}
                  >
                     <HiOutlineShoppingCart />
                     Add to cart
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CardItem;
