const router = require('express').Router()
const {
    getAllCustomer,
    getCustomerById,
    createCustomer,
    deleteCustomerById,
    updateCustomerById,
} = require('../controllers/customer')
// GET / get all breads
router.get('/', getAllCustomer)

// GET /:id get bread by id
router.get('/:id', getCustomerById)

//POST / creat bread
router.post('/', createCustomer)

// PUT /:id update
router.put('/:id', updateCustomerById)
// DELETE /:id delete bread by id
router.delete('/:id', deleteCustomerById)

module.exports = router