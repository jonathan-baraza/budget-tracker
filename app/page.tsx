"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addTransaction,
  deleteTransaction,
} from "@/redux/features/budgetSlice";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  const { balance, transactions } = useAppSelector((state) => state.budget);
  const dispatch = useAppDispatch();
  return (
    <main className="w-full h-screen bg-[#faf9fe]">
      {/* Side Menu */}
      <SideMenu />
    </main>
  );
}
