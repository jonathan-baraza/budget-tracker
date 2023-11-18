import React from "react";
import TransactionItem from "./TransactionItem";
import { FaLongArrowAltUp, FaLongArrowAltDown, FaList } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { filterTransactions } from "@/redux/features/budgetSlice";
import { useDispatch } from "react-redux";
const AllTransactions = () => {
  const { transactions } = useAppSelector((state) => state.budget);
  const dispatch = useDispatch();
  return (
    <div className="w-full flex  mt-4">
      <div className="w-[70%]  min-h-[50vh]">
        <div className="flex justify-between items-center w-full my-3">
          <div className="mb-1 font-semibold">
            My Transactions ({transactions?.length})
          </div>
          <div className="flex space-x-4 items-center">
            <div
              onClick={() => {
                dispatch(filterTransactions("all"));
              }}
              className="flex items-center space-x-1 text-gray-200 bg-[#132150] cursor-pointer  px-3 py-1 text-xs rounded-lg"
            >
              <FaList size={16} className="text-white" />
              <span>All transactions</span>
            </div>
            <div
              onClick={() => {
                dispatch(filterTransactions("Income"));
              }}
              className="flex items-center space-x-1 text-gray-200 bg-[#132150] cursor-pointer  px-3 py-1 text-xs rounded-lg"
            >
              <FaLongArrowAltUp size={16} className="text-green-500" />
              <span>Filter Income</span>
            </div>
            <div
              onClick={() => {
                dispatch(filterTransactions("Expense"));
              }}
              className="flex items-center space-x-1 text-gray-200 bg-[#132150] cursor-pointer  px-3 py-1 text-xs rounded-lg"
            >
              <FaLongArrowAltDown className="text-red-500" size={16} />
              <span>Filter Expenses</span>
            </div>
          </div>
        </div>

        {/* Transactions table */}
        <div
          style={{ overflowX: "auto" }}
          className="w-full h-[68vh] overscroll-y-auto  pb-4"
        >
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
            <tbody className="w-full">
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
      <div className="w-[30%] flex justify-center flex-col space-y-4">
        <img className="w-full" alt="Expense photo" src={"/finance2.png"} />
        <h2 className="text-sm italic font-semibold text-center">
          &quot;Your way to financial Freedom&qout;
        </h2>
      </div>
    </div>
  );
};

export default AllTransactions;
