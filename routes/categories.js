import { Router } from 'express'; 
import CategoryService from '../services/CategoryService';
import Category from '../models/Category';
const categoryServiceInstance = new CategoryService(Category);

export default (app) => {
    const route  = Router();
    app.use('/categories', route);

    route.get('/', async (req, res, next) => {
        try {
            const { categories } = await categoryServiceInstance.getAll();

            res.json(categories);
        } catch (error) {
            next(error);
        }
    });
    
    route.post('/', async (req, res, next) => {
        try {
            const categoryDTO = req.body;
            const { category } = await categoryServiceInstance.add(categoryDTO);

            res.json(category);
        } catch (error) {
            next(error);
        }
    });

    route.delete('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const { category } = await categoryServiceInstance.delete(id);

            res.json(category);
        } catch (error) {
            next(error);
        }
    });

    route.get('/:id/expenses', async (req, res, next) => {
        try {
            const id = req.params.id;
            const { expenses } = await categoryServiceInstance.getExpenses(id);

            res.json(expenses);
        } catch (error) {
            next(error);
        }
    });
}
