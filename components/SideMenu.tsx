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
      <div className="flex-col justify-between flex px-8 mt-8  h-[70vh]">
        <div className="flex flex-1  flex-col   space-y-4">
          <div className="flex items-center space-x-3 text-white hover:cursor-pointer hover:text-white">
            <GrAppsRounded size={20} color={""} />
            <div className="text-sm">Dashboard</div>
          </div>
          <div className="flex items-center space-x-3 hover:cursor-pointer hover:text-white text-[#6d87cb] duration-200">
            <MdPieChart size={20} color={""} />
            <div className="text-sm">Charts</div>
          </div>
          <div className="flex items-center space-x-3 hover:cursor-pointer hover:text-white text-[#6d87cb] duration-200">
            <MdCalendarMonth size={20} color={""} />
            <div className="text-sm">Calendar</div>
          </div>
          <div className="flex items-center space-x-3 hover:cursor-pointer hover:text-white text-[#6d87cb] duration-200">
            <MdCreditCard size={20} color={""} />
            <div className="text-sm">Cards</div>
          </div>
          <div className="flex items-center space-x-3 hover:cursor-pointer hover:text-white text-[#6d87cb] duration-200">
            <HiOutlineDocumentReport size={20} color={""} />
            <div className="text-sm">Reports</div>
          </div>
          <div className="flex items-center space-x-3 hover:cursor-pointer hover:text-white text-[#6d87cb] duration-200">
            <IoMdNotificationsOutline size={20} color={""} />
            <div className="text-sm">Notifications</div>
          </div>
        </div>
        <div className="flex flex-col  space-y-4 ">
          <div className="flex items-center  space-x-3 hover:cursor-pointer hover:text-white text-[#6d87cb] duration-200">
            <IoMdInformationCircleOutline size={20} />
            <div className="text-sm">About</div>
          </div>
          <div className="flex items-center  space-x-3 hover:cursor-pointer hover:text-white text-[#6d87cb] duration-200">
            <IoSettingsOutline size={20} />
            <div className="text-sm">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
