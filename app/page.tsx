"use client";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  addTransaction,
  deleteTransaction,
} from "@/redux/features/budgetSlice";

export default function Home() {
  const { balance, transactions } = useAppSelector((state) => state.budget);
  const dispatch = useAppDispatch();
  return (
    <main>
     
    </main>
  );
}
