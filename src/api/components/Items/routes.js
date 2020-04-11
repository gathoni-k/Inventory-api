const express = require('express')

// intialize router
const router = express.Router()

// require routes controllers
const item = require('./controllers')

// create item
router.post('/create', item.create)

// get item
router.get('/get/:itemId', item.getOne)

// get all items item
router.get('/all', item.getAll)

// update item
router.put('/update/:itemId', item.update)

// delete iten
router.delete('/delete/:itemId', item.delete)

module.exports = router