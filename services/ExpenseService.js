export default class ExpenseService {
    constructor(expenseModel){
        this.expenseModel = expenseModel;
    }

    async getAll() {
        try {
            const expenses = await this.expenseModel.find();

            return { expenses };
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const expense = await this.expenseModel.findById(id);

            return { expense };
        } catch (error) {
            throw error;
        }
    }
    
    async add(expense) {
        try {
            const expenseRecord = await this.expenseModel.create(expense);
        
            return { expense: expenseRecord };
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const { expense } = await this.findById(id);

            await expense.remove();

            return { expense };
        } catch (error) {
            throw error;
        }
    }
};
