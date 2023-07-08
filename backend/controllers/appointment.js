const Appointment = require('../models/Appointment')

async function getAllAppointment(req, res) {
    try {
        const appointments = await Appointment.find()
        res.json(appointments)        
    } catch(error){
        console.log('error fetching appointment:', error)
        res.json({'message': 'error fetching appointment'})
    }
}

async function getAppointmentById(req, res) {
    try {
        const { id } = req.params
        const appointment = await Appointment.findById(id)
        if (!appointment) throw new Error('error retrieving appointment')
        res.json(appointment)
    } catch(error){
        console.log('error fetching appointment:', error)
        res.json({'message': 'error fetching appointment'})
    }
}

async function createAppointment(req, res) {
    
    try {
        if (!req.body.image) req.body.image = undefined
        const appointment = await new Appointment(req.body).save()        
        const id = appointment.id
        res.status(201).json({ 'message': 'appointment created',id })
    } catch (error) {
        console.log('error creating appointment:', error)
        res.json({ 'message': 'error creating appointment' })
    }
}

async function updateAppointmentById(req, res) {
    console.log(req.body)
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Appointment.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'appointment updated' })
    } catch (error) {
        console.log('error updating appointment:', error)
        res.json({ 'message': 'error updating appointment' })
    }
}

async function deleteAppointmentById(req, res) {
    try {
        const { id } = req.params
        await Appointment.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'appointment deleted' })
    } catch (error) {
        console.log('error deleting appointment:', error)
        res.json({ 'message': 'error deleting appointment' })
    }
}

module.exports = {
    getAllAppointment,
    getAppointmentById,
    createAppointment,
    deleteAppointmentById,
    updateAppointmentById,
}