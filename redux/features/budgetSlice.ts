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
  allTransactions?: transactionType[];
  transactions?: transactionType[];
  holdBalance: number;
  showAddForm: boolean;
}

const savedTransactions = typeof window!=="undefined" && localStorage?.getItem("transactions");

const initialState: budgetType = {
  balance: Number(JSON.parse(typeof window!=="undefined"?(localStorage.getItem("balance") || "0"):"0")),
  holdBalance: Number(JSON.parse(typeof window!=="undefined"?(localStorage.getItem("balance") || "0"):"0")),
  allTransactions: savedTransactions ? JSON.parse(savedTransactions) : [],
  transactions: savedTransactions ? JSON.parse(savedTransactions) : [],
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
        state.holdBalance = state.balance - action.payload.amount;
      } else {
        state.balance = state.balance + action.payload.amount;
        state.holdBalance = state.balance + action.payload.amount;
      }

      //call slice to update local storage
      budgetSlice.caseReducers.updateLocalStorage(state);
    },
    updateLocalStorage: (state) => {
      //Fn to update local storage data
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
      localStorage.setItem("balance", JSON.stringify(state.balance));
    },
    filterTransactions: (state, action: PayloadAction<string>) => {
      if (action.payload === "all") {
        state.balance = state.holdBalance;
        state.transactions = state.allTransactions;
        return;
      }
      const filteredTransactions = state.allTransactions?.filter(
        (transaction) => transaction.type === action.payload
      );
      state.transactions = filteredTransactions;
      let filteredBalance = 0;
      filteredTransactions?.forEach((transaction) => {
        filteredBalance = filteredBalance + transaction.amount;
      });
      state.balance = filteredBalance;
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

      //call slice to update local storage
      budgetSlice.caseReducers.updateLocalStorage(state);
    },

    toggleShowAddForm: (state, action: PayloadAction<boolean>) => {
      state.showAddForm = action.payload;
    },
  },
});

export const {
  addTransaction,
  deleteTransaction,
  toggleShowAddForm,
  filterTransactions,
} = budgetSlice.actions;
export default budgetSlice.reducer;
