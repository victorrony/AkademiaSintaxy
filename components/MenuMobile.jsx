import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
   { id: 1, name: "Home", url: "/" },
   { id: 2, name: "Collection", subCollection: true },
   { id: 3, name: "Men", url: "men" },
   { id: 4, name: "Women", url: "women" },
   { id: 5, name: "About", url: "about" },
   { id: 6, name: "Contact", url: "contact" },
];

const subCollection = [
   { id: 1, name: "Nike", doc_count: 20 },
   { id: 2, name: "Jordan", doc_count: 25 },
   { id: 3, name: "Adidas", doc_count: 32 },
   { id: 4, name: "Running shoes", doc_count: 25 },
   { id: 5, name: "Football shoes", doc_count: 16 },
];

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories }) => {
   return (
      <ul className="flex flex-col md:hiden font-bold absolute top-[50px] left-0 w-full h-[cal(100vh-50px)] bg-white border-t text-black ">
         {data.map((item) => {
            return (
               <React.Fragment key={item.id}>
                  {!!item.subCollection ? (
                     <li
                        className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                        onClick={() => setShowCatMenu(!showCatMenu)}
                     >
                        <div className="flex justify-between items-center">
                           {item.name}
                           <BsChevronDown size={14} />
                        </div>

                        {showCatMenu && (
                           <ul className="flex bg-black/[0.05] -mx-5 mt-4 -mb-4 ">
                              {subCollection.map((subMenu, id) => {
                                 return (
                                    <Link
                                       href={`/collection/${""}`}
                                       key={id}
                                       onClick={() => {
                                          setShowCatMenu(false);
                                          setMobileMenu(false);
                                       }}
                                    >
                                       <li className="py-4 px-5 border-t  flex justify-between">
                                          {subMenu.name}
                                          <span className=""></span>
                                       </li>
                                    </Link>
                                 );
                              })}
                           </ul>
                        )}
                     </li>
                  ) : (
                     <li className="py-4 px-5 border-b ">
                        <Link href={item.url} onClick={() => setMobileMenu(false)}>
                           {item.name}
                        </Link>
                     </li>
                  )}
               </React.Fragment>
            );
         })}
      </ul>
   );
};

export default MenuMobile;
