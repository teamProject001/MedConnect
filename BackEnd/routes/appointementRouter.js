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
router.get('/allAppointement', getAppointments);
router.post('/newApointement', createAppointment);
router.get('/appointement/:id', getAppointment);
router.put('/updateApointement/:id', updateAppointment);
router.delete('/deleteApointement/:id', deleteAppointment);

module.exports = router;
