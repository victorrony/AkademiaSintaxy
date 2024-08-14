import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const AddToCartButton = ({ onAdd }) => {
  return (
    <button
      className="flex items-center justify-center gap-2 bg-orange-500 text-white rounded-lg p-4 w-full"
      onClick={onAdd}
    >
      <HiOutlineShoppingCart />
      Add to cart
    </button>
  );
};

export default AddToCartButton;
