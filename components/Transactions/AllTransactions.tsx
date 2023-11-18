import React from "react";
import TransactionItem from "./TransactionItem";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
const AllTransactions = () => {
  const { transactions } = useAppSelector((state) => state.budget);
  return (
    <div className="w-full  mt-4">
      <div className="w-full bg-red-200 min-h-[50vh]">
        <div className="flex justify-between items-center w-[70%] my-1">
          <div className="mb-1">My Transactions ({transactions?.length})</div>
          <div className="flex space-x-4 items-center">
            <div className="flex items-center space-x-1 text-gray-200 bg-[#132150] cursor-pointer  px-3 py-1 text-xs rounded-lg">
              <FaLongArrowAltUp size={16} className="text-green-500" />
              <span>Sort Income</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-200 bg-[#132150] cursor-pointer  px-3 py-1 text-xs rounded-lg">
              <FaLongArrowAltDown className="text-red-500" size={16} />
              <span>Sort Expenses</span>
            </div>
          </div>
        </div>

        {/* Transactions table */}
        <div className="w-[70%]">
          <table className="w-full">
            <thead className="bg-[#0f1a3a] p-2 text-gray-200 text-xs">
              <tr>
                <td className=" px-2 py-1">NO.</td>
                <td className=" px-2 py-1">AMOUNT</td>
                <td className="text-end  pl-2 pr-4 py-1">PAYMENT TYPE</td>
                <td className=" pl-6 pr-2 py-1">PAYMENT DATE</td>
                <td className="text-end px-2 py-1">PAYMENT NAME</td>
                <td className="text-end pl-6 pr-2">ACTION</td>
              </tr>
            </thead>
            <tbody>
              {transactions &&
                transactions.map((transaction, index) => (
                  <TransactionItem
                    key={transaction.id}
                    no={index + 1 + ""}
                    transaction={transaction}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
