export default class AccountService {
    constructor(accountModel, expenseModel){
        this.accountModel = accountModel;
        this.expenseModel = expenseModel;
    }

    async getAll() {
        try {
            const accounts = await this.accountModel.find();

            return { accounts };
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const account = await this.accountModel.findById(id);

            return { account };
        } catch (error) {
            throw error;
        }
    }
    
    async add(account) {
        try {
            const accountRecord = await this.accountModel.create(account);
        
            return { account: accountRecord };
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const { account } = await this.findById(id);

            await account.remove();

            return { account };
        } catch (error) {
            throw error;
        }
    }

    async getExpenses(id) {
        try {
            const expenses = await this.expenseModel.find({ account: id });

            return { expenses };
        } catch (error) {
            throw error;
        }
    }
};
