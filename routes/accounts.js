import { Router } from 'express'; 
import AccountService from '../services/AccountService';
import Account from '../models/Account';
import Expense from '../models/Expense';
const accountServiceInstance = new AccountService(Account, Expense);

export default (app) => {
    const route  = Router();
    app.use('/accounts', route);

    route.get('/', async (req, res, next) => {
        try {
            const { accounts } = await accountServiceInstance.getAll();

            res.json(accounts);
        } catch (error) {
            next(error);
        }
    });
    
    route.post('/', async (req, res, next) => {
        try {
            const accountDTO = req.body;
            const { account } = await accountServiceInstance.add(accountDTO);

            res.json(account);
        } catch (error) {
            next(error);
        }
    });

    route.delete('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const { account } = await accountServiceInstance.delete(id);

            res.json(account);
        } catch (error) {
            next(error);
        }
    });

    route.get('/:id/expenses', async (req, res, next) => {
        try {
            const id = req.params.id;
            const { expenses } = await accountServiceInstance.getExpenses(id);

            res.json(expenses);
        } catch (error) {
            next(error);
        }
    });
}
