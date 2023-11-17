import { createSlice } from "@reduxjs/toolkit";

interface transactionType {
  name: string;
  amount: number;
  type: string;
}

interface budgetType {
  balance: number;
  transactions?: transactionType[];
}

const initialState: budgetType = {
  balance: 0,
  transactions: [],
};

const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.balance = state.balance + 20;
    },
    deleteTransaction: (state, action) => {
      state.balance = state.balance - 20;
    },
  },
});

export const { addTransaction, deleteTransaction } = budgetSlice.actions;
export default budgetSlice.reducer;
