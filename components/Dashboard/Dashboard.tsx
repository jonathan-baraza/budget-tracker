import React from "react";
import Header from "./Header";
import AllTransactions from "../Transactions/AllTransactions";

const Dashboard = () => {
  return (
    <div className="flex flex-col mx-6">
      <Header />
      <AllTransactions />
    </div>
  );
};

export default Dashboard;
