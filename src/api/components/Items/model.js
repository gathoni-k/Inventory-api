const mongoose = require('mongoose')
const { Schema } = mongoose

const itemSchema = new Schema({
    itemId: mongoose.Types.ObjectId,
    name: String,
    size: String,
    description: String,
    price: String,
    no_in_stock: Number,
    url: String,
    categoryName: String
})

module.exports = mongoose.model('Item', itemSchema)