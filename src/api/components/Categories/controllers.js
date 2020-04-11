const Category = require('./model')

module.exports = {
    create: async (req, res) => {
        try {
            // check if category data was passed
            if(!req.body) {
                // throw error
                throw new Error('Bad request. User data not provided')
            }
            let { name, description, url } = req.body
            let data = { name, description, url }
            // check if category already exists
            let categoryExists = await Category.findOne({name: name})
        
            if(categoryExists) {
                throw new Error('Category already exists')
            }

            // create category
            let newCategory = new Category(data)
            await newCategory.save()
            res.status(201).json({
                success: true,
                message: 'Category created successfully',
                Category: newCategory
            })
        } catch (error) {
            res.json({
                success: false,
                message: error.message
            })
        }
    },
    getOne: async (req, res) => {
        try {
            // check if categoryId was passed
            if(!req.params.categoryId) {
                throw new Error('Bad request')
            } 

            // query db for caegory
            let foundCategory = await Category.findById(req.params.categoryId)

            // if category not found, throw error
            if(!foundCategory) {
                throw new Error(`Category with id ${req.params.categoryId} not found`)
            }
            res.status(200).json({
                success: true,
                message: 'Category retrieved successfully',
                category: foundCategory
            })
        } catch (error) {
            res.json({
                success: false,
                message: error.message
            })
        }
    },
    getAll: async (req, res) => {
        try {
            // query db for all categories
            let categories = await Category.find({})

            // if no categories found
            if (!categories) {
                throw new Error('No categories found')
            }
            res.status(201).json({
                success: true,
                message: 'Categories retrieved successfully',
                categories
            })
        } catch (error) {
            res.json({
                success: false,
                message: error.message
            })
        }
    },
    update: async (req, res) => {
        try {
            // check if categoryId was passed
            if(!req.params.categoryId) {
                throw new Error('Bad request')
            }
            if(!req.body){
                throw new Error('No data was provided')
            }
            let {name, description, url } = req.body
            // data to update
            let data = { name, description, url}

            // find category and update
            let updatedCategory = await Category.findOneAndUpdate(req.params.categoryId, data, { new:true })

            if(!updatedCategory) {
                throw new Error(`Category with id ${req.params.categoryId} not found`)
            }
            res.status(201).json({
                success: true,
                message: 'Category updated successfully',
                category: updatedCategory
            })
        } catch (error) {
            res.json({
                success: false,
                message: error.message
            })
        }
    },
    delete: async (req, res) => {
        try {
            
            // check if categoryId was updated
            if(!req.params.categoryId) {
                throw new Error('Bad request')
            }
            let deletedCategory = Category.findByIdAndRemove(req.params.categoryId)
            // if no category was found, throw error

            if(!deletedCategory) {
                throw new Error(`Category with id ${req.params.categoryId}`)
            }

            res.json({
                success: true,
                message: 'Category deleted successfully'
            })

        } catch (error) {
            res.json({
                success: false,
                error: error.message
            })
        }
    }
}