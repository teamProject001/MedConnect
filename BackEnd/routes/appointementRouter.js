const express = require('express');
const router = express.Router();
const {
    getAppointments,
    createAppointment,
    getAppointment,
    updateAppointment,
    deleteAppointment
} = require('../controllers/appointemzntController.js');

// Routes
router.get('/', getAppointments);
router.post('/', createAppointment);
router.get('/:id', getAppointment);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;
