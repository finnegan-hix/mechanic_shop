const router = require('express').Router()
const {
    getAllMechanic,
    getMechanicById,
    createMechanic,
    deleteMechanicById,
    updateMechanicById,
} = require('../controllers/mechanic')
// GET / get all breads
router.get('/', getAllMechanic)

// GET /:id get bread by id
router.get('/:id', getMechanicById)

//POST / creat bread
router.post('/', createMechanic)

// PUT /:id update
router.put('/:id', updateMechanicById)
// DELETE /:id delete bread by id
router.delete('/:id', deleteMechanicById)

module.exports = router