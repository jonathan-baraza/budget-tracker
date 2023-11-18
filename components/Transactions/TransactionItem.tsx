"use client";

import { GiCash } from "react-icons/gi";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  transactionType,
  deleteTransaction,
} from "@/redux/features/budgetSlice";
import { useAppDispatch } from "@/redux/hooks";

const TransactionItem = ({
  transaction,
  no,
}: {
  transaction: transactionType;
  no: string;
}) => {
  const { name, amount, type, date, id } = transaction;
  const dispatch = useAppDispatch();

  return (
    <tr className="border-b border-gray-300">
      <td className="px-2 py-1 ">{no}</td>
      <td className="px-2 py-1 ">
        <div className="flex space-x-1">
          <GiCash />
          <span className="text-xs font-bold">
            Ksh {amount.toLocaleString()}
          </span>
        </div>
      </td>
      <td className="pr-4 pl-2 ">
        {type === "Income" ? (
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

      <td className="pr-2 pl-6 text-xs text-gray-600">{date}</td>
      <td className="py-3 text-xs text-gray-600 text-end">{name}</td>
      <td className="py-3 text-xs text-gray-600  flex justify-end pr-2">
        <RiDeleteBin6Fill
          size={18}
          onClick={() => {
            dispatch(deleteTransaction(transaction));
          }}
          className={"text-red-500 cursor-pointer hover:scale-105 duration-100"}
        />
      </td>
    </tr>
  );
};

export default TransactionItem;
