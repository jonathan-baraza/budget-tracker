import React from "react";
import TransactionItem from "./TransactionItem";

const AllTransactions = () => {
  return (
    <div className="w-full  mt-4">
      <div className="mb-1">My Transactions</div>

      {/* Transactions table */}
      <div className="w-[70%]">
        <table className="w-full">
          <thead className="bg-[#0f1a3a] p-2 text-gray-200 text-xs">
            <tr>
              <td className=" px-2 py-1">AMOUNT</td>
              <td className="text-end  pl-2 pr-4 py-1">PAYMENT TYPE</td>
              <td className=" pl-6 pr-2 py-1">PAYMENT DETAILS</td>
              <td className="text-end px-2 py-1">PAYMENT DESCRIPTION</td>
              <td className="text-end pl-6 pr-2">ACTION</td>
            </tr>
          </thead>
          <tbody>
            <TransactionItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransactions;
