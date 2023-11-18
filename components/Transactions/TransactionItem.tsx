"use client";
import { useState } from "react";
import { GiCash } from "react-icons/gi";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TransactionItem = () => {
  const [isIncome, setIsIncome] = useState<boolean>(true);

  const getDateTime = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    let ampm = "am";

    if (hours > 12) {
      hours -= 12;
      ampm = "pm";
    }

    //full date time
    return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
  };
  return (
    <tr className="border-b border-gray-300">
      <td className="px-2 py-1 ">
        <div className="flex space-x-1">
          <GiCash />
          <span className="text-xs font-bold">Ksh 458,334</span>
        </div>
      </td>
      <td className="pr-4 pl-2 ">
        {isIncome ? (
          <div className="text-green-600 font-semibold flex items-center space-x-2 text-xs justify-end">
            <span>INCOME</span>
            <FaArrowTrendUp />
          </div>
        ) : (
          <div className="text-red-600 font-semibold flex items-center space-x-2 text-xs justify-end">
            <span>EXPENSE</span>
            <FaArrowTrendDown />
          </div>
        )}
      </td>

      <td className="pr-2 pl-6 text-xs text-gray-600">{getDateTime()}</td>
      <td className="py-3 text-xs text-gray-600 text-end">
        Rent payment for November.
      </td>
      <td className="py-3 text-xs text-gray-600  flex justify-end pr-2">
        <RiDeleteBin6Fill
          size={18}
          className={
            "text-red-500 cursor-pointer hover:scale-105 duration-100"
          }
        />
      </td>
    </tr>
  );
};

export default TransactionItem;
