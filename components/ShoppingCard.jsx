import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import ShoppingCardItem from "../components/ShoppingCardItem";
import { useSelector } from "react-redux";

const ShoppingCard = ({ onClose }) => {
   const { items } = useSelector((state) => state.cart);

   return (
      <div className="w-[380px] md:w-[500px] bg-blue-200 fixed shadow rounded-xl top-9 right-16 lg:right-24 lg:top-14 xl:top-14 xl:right-32 p-2 border-spacing-2 z-50 flex flex-col md:py-10">
         <Wrapper>
            <button
               type="button"
               className="bg-blue-500 hover:bg-blue-700 p-2 rounded-full absolute top-4 right-5"
               onClick={onClose}
            >
               X
            </button>
            <div className="text-center max-w-[800px] mx-auto mt-0 md:mt-0">
               <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Shopping Cart</div>
            </div>
            {items?.length > 0 ? (
               <div className="flex flex-col gap-12 ">
                  <div className="flex-[2]">
                     <div className="text-lg font-bold">Cart Items</div>
                     {items.map((item) => (
                        <div className="mt-2">
                           <ShoppingCardItem key={item.id} data={item}  />
                        </div>
                     ))}
                  </div>
                  <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                     Checkout
                  </button>
               </div>
            ) : (
               <div className="flex-[2] flex flex-col items-center pb-[10px] ">
                  <Image
                     src="/empty-cart.jpg"
                     width={200}
                     height={200}
                     className="w-[200px] md:w-[200px] md:h[150px]"
                  />
                  <span className="text-xl font-bold md:mt-5">Your cart is empty</span>
                  <span className="text-center mt-4">
                     Looks like you have not added anything in your cart.
                     <br />
                     Go ahead and explore top categories.
                  </span>
                  <Link
                     href="/"
                     onClick={onClose}
                     className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                  >
                     Continue Shopping
                  </Link>
               </div>
            )}
         </Wrapper>
      </div>
   );
};

export default ShoppingCard;
