const Item = require('./model')
const Category = require('../Categories/model')
module.exports = {
    create: async (req, res) => {
        try {
            if(!req.body){
                // throw bad request error
                throw new Error('Bad request. Item data not provided')
            }

            // require req.body
            let { name, description,size, price, url, categoryName}  = req.body
            let data = {name, description, size, price, categoryName, url, no_in_stock: 1}
            // check if item already in db
            let foundItem = await Item.findOne({name})

            if (foundItem) {
                // update no_in_stock
                let newNoInStock = foundItem.no_in_stock + 1
                foundItem.no_in_stock = newNoInStock

                res.json({
                    success: 'true',
                    message: 'Item already in db, no in stock increased by one',
                    item: foundItem
                })
            } else {
                // check if that category exists
                let categoryExists = await Category.findOne({name: categoryName})

                // if the category exist
                if(categoryExists) {
                    // create the item
                    let newItem = new Item(data)
                    // save the item
                    await newItem.save()

                    // add the item id to the category items array
                    let newItemId = newItem.itemId
                    categoryExists.items.push(newItemId)

                    // send response
                    res.status(201).json({
                        success: 'true',
                        message: 'Item created',
                        item: newItem
                    })
                } else {
                    // throw a category does not exist error
                    throw new Error('Category does not exist. Please create one first')
                }
            }
        } catch (error) {            

            res.json({
                success: false,
                error: error.message
            })
            
        }

    },
    getOne: async(req, res) => {
        try {
            // check if itemId was passed
            if(!req.params.itemId) {
                throw new Error('Bad request')
            }

            // query db for item
            let foundItem = await Item.findById(req.params.itemId)

            if(!foundItem){
                // if item is not found, throw error
                throw new Error(`Item with id ${req.params.id} was not found`)
            }
            res.status(200).json({
                success: true,
                message: 'Item retrieved',
                item: foundItem
            })
        } catch (error) {
            res.json({
                success: false,
                error: error.message
            }) 
        }
    },
    getAll: async (req, res) => {
        try {
            let items = await Item.find({})

            // if no items were found
            if(!items) {
                throw new Error('No items were found')
            }

            res.status(201).json({
                success: true,
                message: 'Items retrieved successfully',
                items: items
            })
        } catch (error) {
           res.json({
               success: false,
               error: error.message
           }) 
        }
    },
    update: async (req, res) => {
        try {
            // check if itemId was passed
            if (!req.params.itemId) {
                // throw bad request error
                throw new Error('Bad request. Item data not provided')
            } 
            // data to update
            let { name, description, price, url, categoryName}  = req.body
            let data = { name, description, price, url, categoryName }
            // find item and update
            let updatedItem = Item.findOneAndUpdate(req.params.itemId, data, { new:true })
            
            if(!updatedItem) {
                throw new Error(`Item with ${req.params.itemId} not found`)
            }
            res.status(201).json({
                success: true,
                message: 'Item updated sucessfully',
                item: updatedItem
            })
            
        } catch (error) {
            res.json({
                success: false,
                error: error.message
            })
        }
    },
    delete: async (req, res) => {
        try {
            // check if itemId was passed
            if (!req.params.itemId) {
                // throw bad request error
                throw new Error('Bad request. Item data not provided')
            } 
            let deletedItem = await Item.findByIdAndRemove(req.params.itemId)

            if(!deletedItem) {
                throw new Error(`Item with id ${req.params.itemId} not found`)
            }
            res.status(200).json({
                success: true,
                message: 'Item deleted successfully'
            })
        } catch (error) {
            res.json({
                success: 'false',
                message: error.message
            })   
        }
    }
}