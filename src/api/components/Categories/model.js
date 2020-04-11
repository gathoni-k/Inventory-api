const mongoose = require('mongoose')
const { Schema } = mongoose

const categorySchema = new Schema({
    categoryId: mongoose.Types.ObjectId,
    name: String,
    description: String,
    url: String,
    items: []
})

module.exports = mongoose.model('Category', categorySchema)