const route = require('express').Router();
const { Category } = require('../../models');

module.exports = (app) => {
  app.use('/categories', route)

  route.get('/', async (req, res, next) => {
    res.json(await Category.findAll());
  });

  route.post('/load', async (req, res, next) => {
    try {
      const category1 = await Category.create({
        name: 'Category1',
        color: 'red',
        icon: 'house.svg'
      });
      const category2 = await Category.create({
        name: 'Category2',
        color: 'red',
        icon: 'house.svg'
      });
      const category3 = await Category.create({
        name: 'Category3',
        color: 'red',
        icon: 'house.svg'
      });
      const category4 = await Category.create({
        name: 'Category4',
        color: 'red',
        icon: 'house.svg'
      });
      const category5 = await Category.create({
        name: 'Category5',
        color: 'red',
        icon: 'house.svg'
      });

      const categories = [
        category1, category2, category3, category4, category5
      ];

      res.json(categories);
    } catch (error) {
      next(error);
    }
  })
}