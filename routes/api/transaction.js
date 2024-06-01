import express from "express";

const router = express.Router();

import { auth } from "../../middlewares.js";

import {
  addIncome,
  addExpense,
  getExpenseStats,
  getIncomeStats,
  deleteTransaction,
  getExpenseCategories,
  getIncomeCategories,
  getPeriodDateTransactions,
} from "../../controller/transactionController.js";

router.post("/income", auth, addIncome);
router.post("/expense", auth, addExpense);
router.get("/expense", auth, getExpenseStats);
router.get("/income", auth, getIncomeStats);
router.delete("/:transactionId", auth, deleteTransaction);
router.get("/expense-categories", auth, getExpenseCategories);
router.get("/income-categories", auth, getIncomeCategories);
router.get("/period-data", auth, getPeriodDateTransactions);

export default router;
