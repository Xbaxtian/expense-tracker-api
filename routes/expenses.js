import { Router } from "express";
import ExpenseService from "../services/ExpenseService";
import Expense from "../models/Expense";
const expenseServiceInstance = new ExpenseService(Expense);

export default (app) => {
  const route = Router();
  app.use("/expenses", route);

  route.get("/", async (req, res, next) => {
    try {
      const { expenses } = await expenseServiceInstance.getAll();

      res.json(expenses);
    } catch (error) {
      next(error);
    }
  });

  route.post("/", async (req, res, next) => {
    try {
      const expenseDTO = req.body;
      const { expense } = await expenseServiceInstance.add(expenseDTO);

      res.json(expense);
    } catch (error) {
      res.status(400).json(error);
    }
  });

  route.delete("/:id", async (req, res, next) => {
    try {
      const id = req.params.id;
      const { expense } = await expenseServiceInstance.delete(id);

      res.json(expense);
    } catch (error) {
      res.status(400).json(error);
    }
  });
};
