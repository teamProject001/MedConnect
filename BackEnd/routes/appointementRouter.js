const express = require('express');
const router = express.Router();
const {
    getAppointments,
    createAppointment,
    getAppointment,
    updateAppointment,
    deleteAppointment,
    getUpcomingAppointments
} = require('../controllers/appointemzntController.js');

// Routes
router.get('/allAppointement', getAppointments);
router.post('/newApointement', createAppointment);
router.get('/appointement/:id', getAppointment);
router.put('/updateApointement/:id', updateAppointment);
router.delete('/deleteApointement/:id', deleteAppointment);

// Route to get upcoming appointments
router.get('/upcoming', getUpcomingAppointments);

module.exports = router;
