import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface transactionType {
  id: string;
  name: string;
  amount: number;
  type: string;
  date: string;
}

export interface budgetType {
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
    addTransaction: (state, action: PayloadAction<transactionType>) => {
      if (state.transactions && state.transactions.length > 0) {
        state.transactions = [action.payload, ...state.transactions];
      } else {
        state.transactions = [action.payload];
      }
      if (action.payload.type === "Expense") {
        state.balance = state.balance - action.payload.amount;
      } else {
        state.balance = state.balance + action.payload.amount;
      }
    },
    deleteTransaction: (state, action: PayloadAction<transactionType>) => {
      state.transactions = state.transactions?.filter(
        (transaction) => transaction.id !== action.payload.id
      );

      //restore budget
      if (action.payload.type === "Expense") {
        state.balance = state.balance + action.payload.amount;
      } else {
        state.balance = state.balance - action.payload.amount;
      }
    },
    toggleShowAddForm: (state, action: PayloadAction<boolean>) => {
      state.showAddForm = action.payload;
    },
  },
});

export const { addTransaction, deleteTransaction, toggleShowAddForm } =
  budgetSlice.actions;
export default budgetSlice.reducer;
