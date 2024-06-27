
const express = require('express');
const router = express.Router();
const {
    getPatients,
    getPatient,
    createPatient,
    updatePatient,
    deletePatient
} = require('../controllers/patientController');

// Routes
router.get('/allPatients', getPatients);
router.post('/CreatePatient', createPatient);
router.get('/onePatient/:id', getPatient);
router.put('/updatePatient/:id', updatePatient);
router.delete('/deletePatient/:id', deletePatient);

module.exports = router;
