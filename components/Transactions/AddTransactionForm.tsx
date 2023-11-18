"use client";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiCash } from "react-icons/gi";
import { useAppDispatch } from "@/redux/hooks";
import { toggleShowAddForm } from "@/redux/features/budgetSlice";
import { toast } from "react-toastify";
const AddTransactionForm = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [type, setType] = useState<string>("");

  //   Form validations
  const handleValidate = () => {
    if (!name) {
      toast.error("Please enter the transaction's name");
    } else if (!amount || amount <= 0) {
      toast.error("Please a valid amount");
    } else if (!type) {
      toast.error("Please select a transaction type");
    }
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="bg-white rounded-lg p-6 w-1/2">
        <div className="w-full flex justify-end">
          <MdClose
            onClick={() => {
              dispatch(toggleShowAddForm(false));
            }}
            size={20}
            className="hover:cursor-pointer hover:scale-x-110 duration-100"
          />
        </div>
        <h2 className="font-bold mb-4 flex items-center">
          <GiCash size={20} className="mr-2" />
          Add a new Transaction
        </h2>
        {type} {amount} {name}
        {/* Name */}
        <div className="text-sm flex flex-col">
          <label className="font-semibold">Name</label>
          <input
            className="border text-xs p-2 rounded mt-2 outline-none"
            type={"string"}
            name={"name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g paying for rent"
          />
        </div>
        {/* Amount */}
        <div className="text-sm flex flex-col mt-4">
          <label className="font-semibold">Amount</label>
          <input
            className="border text-xs p-2 rounded mt-2 outline-none"
            type={"number"}
            name={"amount"}
            placeholder="e.g 1000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        {/* Type */}
        <div className="text-sm flex flex-col mt-4">
          <label className="font-semibold">Type</label>
          <div className="flex items-center">
            <span className="flex items-center space-x-2 m-3">
              <span className="text-xs">Income</span>
              <input
                className="border text-xs p-2 rounded  outline-none cursor-pointer"
                name="transactionType"
                type={"radio"}
                value={"Income"}
                onClick={() => setType("Income")}
              />
            </span>
            <span className="flex items-center space-x-2 m-3">
              <span className="text-xs">Expense</span>
              <input
                className="border text-xs p-2 rounded outline-none cursor-pointer"
                name="transactionType"
                type={"radio"}
                value={"Expense"}
                onClick={() => setType("Expense")}
              />
            </span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleValidate}
            className="rounded-lg border-none text-white text-sm bg-[#0f1a3a] px-4 py-2 hover:bg-[#090f20] duration-100"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTransactionForm;
