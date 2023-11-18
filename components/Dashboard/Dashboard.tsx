"use client";
import React from "react";
import Header from "./Header";
import AllTransactions from "../Transactions/AllTransactions";
import { useAppSelector } from "@/redux/hooks";
const Dashboard = () => {
  const { transactions } = useAppSelector((state) => state.budget);
  return (
    <div className="flex flex-col mx-6">
      <Header />
      {transactions && transactions?.length > 0 ? (
        <AllTransactions />
      ) : (
        <div className="flex flex-col w-full items-center">
          <img className="w-1/3" alt="Credit cards" src="/creditcards2.png" />
          <div className="font-bold text-center flex flex-col">
            <span> You don&apos;t have any transactions currently.</span>
            <span>
              Create one by clicking the &quot;Create Transaction&quot; button
              on the right.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
