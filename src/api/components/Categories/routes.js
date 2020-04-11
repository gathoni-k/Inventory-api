const express = require('express')

// intialize router
const router = express.Router()

// require route controllers
const category = require('./controllers')

// create item
router.post('/create', category.create)

// get item
router.get('/get/:categoryId', category.getOne)

// get all categories
router.get('/all', category.getAll)

// update item
router.put('/update/:categoryId', category.update)

// delete iten
router.delete('/delete', category.delete)

module.exports = router