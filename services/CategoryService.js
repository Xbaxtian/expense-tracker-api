export default class CategoryService {
    constructor(categoryModel){
        this.categoryModel = categoryModel;
    }

    async getAll() {
        try {
            const categories = await this.categoryModel.find();

            return { categories };
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const category = await this.categoryModel.findById(id);

            return { category };
        } catch (error) {
            throw error;
        }
    }
    
    async add(category) {
        try {
            const categoryRecord = await this.categoryModel.create(category);
        
            return { category: categoryRecord };
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const { category } = await this.findById(id);

            await category.remove();

            return { category };
        } catch (error) {
            throw error;
        }
    }

    async getExpenses(id) {
        try {
            const { category } = await this.findById(id);
            
            return { expenses: category.expenses };
        } catch (error) {
            throw error;
        }
    }
};
