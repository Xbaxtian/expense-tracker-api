import mongoose, { Schema } from "mongoose";

const expenseSchema = mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true, default: 0 },
  created_at: { type: Date, required: true, default: Date.now() },
  // account: { type: Schema.Types.ObjectId, ref:'Account', required: true },
  // category: { type: Schema.Types.ObjectId, ref:'Category', required: true }
});

export default mongoose.model("Expense", expenseSchema);
