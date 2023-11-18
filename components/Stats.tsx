import React from "react";
import { GiCash } from "react-icons/gi";
import { GrCurrency } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="w-full flex justify-end p-6 space-x-3">
      {/* Total transactions */}
      <div className="flex items-center space-x-1 text-gray-200 bg-[#132150] px-3 py-2 text-xs rounded-lg">
        <GiCash size={16} />
        <span> Total transactions: 39</span>
      </div>
      <div className="flex items-center space-x-1 text-gray-200 bg-[#132150] px-3 py-2 text-xs rounded-lg">
        <GrCurrency size={16} />
        <span>Currency: KES</span>
      </div>
      <div className="flex items-center space-x-1 text-gray-200 bg-[#132150] px-3 py-2 text-xs rounded-lg">
        <FaLongArrowAltUp size={16} className="text-green-500" />
        <span>Collective Income: KES</span>
      </div>
      <div className="flex items-center space-x-1 text-gray-200 bg-[#132150] px-3 py-2 text-xs rounded-lg">
        <FaLongArrowAltDown className="text-red-500" size={16} />
        <span>Collective Expenses: KES</span>
      </div>
    </div>
  );
};

export default Stats;
