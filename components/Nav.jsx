import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import ShoppingCard from "./ShoppingCard";

const Nav = () => {
   const [showCatMenu, serShowCatMenu] = useState(false);
   const [mobileMenu, setMobileMenu] = useState(false);
   const [show, setShow] = useState(false);
   const [showCart, setShowCart] = useState(false);

   const { cartItems } = useSelector((state) => state.cart);

   return (
      <>
         <header
            className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
         >
            <Wrapper className="h-[60px] flex justify-between items-center ">
               <div className="flex items-center gap-6 text-black">
                  <div className=" md:w-12 p-2 mt-2 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
                     {mobileMenu ? (
                        <VscChromeClose className="text-[20px]" onClick={() => setMobileMenu(false)} />
                     ) : (
                        <BiMenuAltRight className="text-[28px]" onClick={() => setMobileMenu(true)} />
                     )}
                  </div>

                  <Link href="/">
                     <img src="/logo.svg" alt="logo" className="" />
                  </Link>
               </div>

               <Menu setShowCatMenu={serShowCatMenu} showCatMenu={showCatMenu} />

               {mobileMenu && (
                  <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={serShowCatMenu} setMobileMenu={setMobileMenu} />
               )}

               <div className="flex items-center gap-2 text-black">
                  <button onClick={() => setShowCart(true)}>
                     <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
                        <BsCart className="text-[15px] md:text-[20px]" />
                        {cartItems.length > 0 && (
                           <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                              {cartItems.length}
                           </div>
                        )}
                     </div>
                  </button>

                  <div className=" ">
                     <img src="/foto.jpg" alt="fot" className="w-10 h-10 rounded-full " />
                  </div>
               </div>
            </Wrapper>
         </header>

         {showCart && <ShoppingCard setShowCart={setShowCart} onClose={() => setShowCart(false)} />}
      </>
   );
};
export default Nav;
