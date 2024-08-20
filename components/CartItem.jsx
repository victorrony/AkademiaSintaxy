import Image from "next/image";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart as removeProductFromCart } from "../store/cartSlice";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import RemoveButton from "./RemoveButton";
import QuantityControl from "./QuantityControl";
import AddToCartButton from "./AddToCard";

export const CartItem = ({ searchShoes, isOpen, closeModel }) => {
   const [Quantity, setQuantity] = useState(0);
   const dispatch = useDispatch();

   const [currentImage, setCurrentImage] = useState(searchShoes.image);
   const [hoveredImage, setHoveredImage] = useState(null);

   const removeFromCart = () => {
      dispatch(removeProductFromCart(searchShoes.id));
      closeModel();
   };

   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={closeModel}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto md:items-center  ">
               <div className="flex flex-col max-h-max items-center w-[450px] justify-center m-auto bg-white dark:bg-black-900  px-4 fixed inset-[-15px] md:w-[800px] ">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-300"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="relative transform  ">
                        <div className="relative flex flex-row justify-end pt-3 md:right-0">
                           <button
                              type="button"
                              className="bg-blue-500 hover:bg-blue-700  p-2 rounded-full"
                              onClick={closeModel}
                           >
                              X
                           </button>
                        </div>

                        <div className="flex flex-col  md:gap-5 md:flex-row border-b">
                           <div className="flex flex-col justify-center">
                              <div className="w-[420px] h-[300px] md:h-[400px]">
                                 <Image
                                    src={hoveredImage || currentImage}
                                    alt="image"
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                              <div className="flex flex-wrap gap-2  items-center mt-2">
                                 {searchShoes.thumbnails?.map((thumbnail) => (
                                    <Image
                                       key={thumbnail.id}
                                       src={thumbnail.image}
                                       alt="thumbnail"
                                       width={400}
                                       height={400}
                                       className="w-[63px] h-14 object-cover mb-6"
                                       onMouseEnter={() => setHoveredImage(thumbnail.image)} // Atualiza a imagem principal
                                       onMouseLeave={() => setHoveredImage(null)} // Volta à imagem original
                                    />
                                 ))}
                              </div>
                           </div>

                           <div className="w-full flex flex-col md:gap-2">
                              <div className="flex flex-col gap-4 md:flex-col md:h-[292px] justify-between">
                                 <div className=" flex justify-center  text-base md:text-lg font-semibold text-black/[0.8]">
                                    {searchShoes.name}
                                 </div>
                                 <div className="stack text-base md:text-lg font-normal max-h-52 md:h-56 overflow-y-auto text-black/[0.5]">
                                    {searchShoes.description}
                                 </div>

                                 <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                                    MRP : &#8377;{searchShoes.price * Quantity}
                                 </div>
                              </div>

                              <div className="flex items-center justify-between mt-4 md:mt-0">
                                 <div className="flex items-center gap-2  text-black/[0.5] text-sm md:text-md">
                                    <div className="flex items-center">
                                       <div className="font-semibold">Quantity: {Quantity}</div>
                                    </div>
                                 </div>
                                 {/* <RemoveButton
                                    onRemove={() => removeFromCart(searchShoes.id)}
                                    className="cursor-pointer text-black/[0.5] text-[16px] md:text-[20px]"
                                 /> */}
                              </div>

                              <div className="flex gap-4  md:mt-3 xl:w-[100%] xl:items-center md:gap-8 bottom-0 static">
                                 <QuantityControl quantity={Quantity} setQuantity={setQuantity} />
                                 <AddToCartButton
                                    onAdd={dispatch(addToCart({ ...searchShoes, quantity: Quantity }))} 
                                   
                                 />
                              </div>
                           </div>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};
