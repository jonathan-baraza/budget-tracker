import React from "react";
import { GrAppsRounded } from "react-icons/gr";
import { FaChartPie } from "react-icons/fa";
import { MdCalendarMonth, MdPieChart, MdCreditCard } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const SideMenu = () => {
  return (
    <div className=" w-1/6  bg-[#06112f] h-screen">
      {/* Current balance */}
      <div className="w-full flex justify-center pt-4">
        <div className="bg-[#13224a] text-white p-4 space-y-3 rounded-lg w-fit m-3 flex items-center justify-center flex-col">
          <div className="text-2xl font-bold">Kes 25,650</div>
          <div className="text-sm ">Current balance</div>
        </div>
      </div>

      {/* Dummy icons */}
      <div className="flex flex-col p-4 px-8 space-y-4">
        <div className="flex items-center space-x-3">
          <GrAppsRounded size={22} color={"#6d87cb"} />
          <div className="text-[#6d87cb]">Dashboard</div>
        </div>
        <div className="flex items-center space-x-3">
          <MdPieChart size={22} color={"#6d87cb"} />
          <div className="text-[#6d87cb]">Charts</div>
        </div>
        <div className="flex items-center space-x-3">
          <MdCalendarMonth size={22} color={"#6d87cb"} />
          <div className="text-[#6d87cb]">Calendar</div>
        </div>
        <div className="flex items-center space-x-3">
          <MdCreditCard size={22} color={"#6d87cb"} />
          <div className="text-[#6d87cb]">Cards</div>
        </div>
        <div className="flex items-center space-x-3">
          <HiOutlineDocumentReport size={22} color={"#6d87cb"} />
          <div className="text-[#6d87cb]">Reports</div>
        </div>
        <div className="flex items-center space-x-3">
          <IoMdNotificationsOutline size={22} color={"#6d87cb"} />
          <div className="text-[#6d87cb]">Notifications</div>
        </div>
        <div className="flex flex-col pt-16  bg-green-400">
          <div className="flex items-center  space-x-3">
            <IoMdInformationCircleOutline size={22} color={"#6d87cb"} />
            <div className="text-[#6d87cb]">About</div>
          </div>
          <div className="flex items-center  space-x-3">
            <IoSettingsOutline size={22} color={"#6d87cb"} />
            <div className="text-[#6d87cb]">Settings</div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
