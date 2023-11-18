import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface transactionType {
  name: string;
  amount: number;
  type: string;
}

interface budgetType {
  balance: number;
  transactions?: transactionType[];
  showAddForm: boolean;
}

const initialState: budgetType = {
  balance: 0,
  transactions: [],
  showAddForm: false,
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
    toggleShowAddForm: (state, action: PayloadAction<boolean>) => {
      state.showAddForm = action.payload;
    },
  },
});

export const { addTransaction, deleteTransaction, toggleShowAddForm } =
  budgetSlice.actions;
export default budgetSlice.reducer;
