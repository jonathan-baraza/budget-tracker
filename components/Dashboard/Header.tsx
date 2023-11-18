import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useAppDispatch } from "@/redux/hooks";
import { toggleShowAddForm } from "@/redux/features/budgetSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between w-full mt-4">
      <div className="text-3xl font-bold text-[#0e1937]">
        Jonathan&apos;s Budget Tracker
      </div>
      <div className="flex items-center space-x-1  text-[#0e1937] border-[#0e1937] border p-2 rounded hover:bg-[#0e1937] hover:text-white duration-200 hover:cursor-pointer">
        <IoMdAddCircleOutline size={20} />
        <span
          className="text-sm font-semibold"
          onClick={() => {
            dispatch(toggleShowAddForm(true));
          }}
        >
          Create Transaction
        </span>
      </div>
    </div>
  );
};

export default Header;
