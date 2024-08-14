import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const RemoveButton = ({ onRemove }) => {
  return (
    <RiDeleteBin6Line
      onClick={onRemove}
      className="cursor-pointer text-white/[0.5] text-[16px] md:text-[20px]"
    />
  );
};

export default RemoveButton;
