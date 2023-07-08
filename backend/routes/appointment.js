const router = require('express').Router()
const {
    getAllAppointment,
    getAppointmentById,
    createAppointment,
    deleteAppointmentById,
    updateAppointmentById,
} = require('../controllers/appointment')
// GET / get all breads
router.get('/', getAllAppointment)

// GET /:id get bread by id
router.get('/:id', getAppointmentById)

//POST / creat bread
router.post('/', createAppointment)

// PUT /:id update
router.put('/:id', updateAppointmentById)
// DELETE /:id delete bread by id
router.delete('/:id', deleteAppointmentById)

module.exports = router