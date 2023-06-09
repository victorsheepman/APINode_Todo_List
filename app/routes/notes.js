const express = require('express')

const router = express.Router()

const {getItems, createItem, updateItem, deleteItem} = require('../controllers/notes')
router.get('/', getItems)
router.post('/', createItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router