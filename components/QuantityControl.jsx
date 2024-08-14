import React from "react";

const QuantityControl = ({ quantity, setQuantity }) => {
  return (
    <div className="flex justify-between items-center bg-slate-400 rounded-lg p-2 xl:w-48">
      <button
        className="flex items-center justify-center w-14 h-10 border-slate-300 rounded-full"
        onClick={() => (quantity > 0 ? setQuantity(quantity - 1) : null)}
      >
        <img src="/icon-minus.svg" alt="icon" />
      </button>
      <p>{quantity}</p>
      <button
        className="flex items-center justify-center w-14 h-10 border-slate-500 rounded-full"
        onClick={() => setQuantity(quantity + 1)}
      >
        <img src="/icon-plus.svg" alt="icon" />
      </button>
    </div>
  );
};

export default QuantityControl;
