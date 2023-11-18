import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between w-full mt-4">
      <div className="text-3xl font-bold text-[#0e1937]">
        Jonathan&apos;s Budget Tracker
      </div>
      <div className="flex items-center space-x-1  text-[#0e1937] border-[#0e1937] border p-2 rounded">
        <IoMdAddCircleOutline size={20} />
        <span className="text-sm font-semibold">Create Transaction</span>
      </div>
    </div>
  );
};

export default Header;
