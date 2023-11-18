"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addTransaction,
  deleteTransaction,
} from "@/redux/features/budgetSlice";
import SideMenu from "@/components/SideMenu";
import Stats from "@/components/Stats";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  const { balance, transactions } = useAppSelector((state) => state.budget);
  const dispatch = useAppDispatch();
  return (
    <main className="w-full h-screen flex bg-[#f1effc]">
      {/* Side Menu */}
      <SideMenu />
      <div className="flex flex-col w-full ">
        {/* App Staistics */}
        <Stats />
        <Dashboard />
      </div>
    </main>
  );
}
