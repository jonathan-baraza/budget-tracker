"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addTransaction,
  deleteTransaction,
} from "@/redux/features/budgetSlice";
import SideMenu from "@/components/SideMenu";
import Stats from "@/components/Stats";
import Dashboard from "@/components/Dashboard/Dashboard";
import AddTransactionForm from "@/components/Transactions/AddTransactionForm";

export default function Home() {
  const { balance, transactions, showAddForm } = useAppSelector(
    (state) => state.budget
  );
  const dispatch = useAppDispatch();
  return (
    <main className="w-full h-screen flex bg-[#f1effc]">
      {/* Side Menu */}
      <SideMenu />
      <div className="flex flex-col w-full relative">
        {/* App Staistics */}
        <Stats />
        <Dashboard />
        {showAddForm && <AddTransactionForm />}
      </div>
    </main>
  );
}
