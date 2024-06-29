
const express = require('express');
const router = express.Router();
const patientDetailsController = require('../controllers/patientDetailsController.js');

// Create a new patient details
router.post('/', patientDetailsController.createPatientDetails);

// Get all patients details
router.get('/', patientDetailsController.getAllPatientDetails);

// Get a single patient details
router.get('/:id', patientDetailsController.getPatientDetailsById);

// Update a patient details
router.put('/:id', patientDetailsController.updatePatientDetails);

// Delete a patient details
router.delete('/:id', patientDetailsController.deletePatientDetails);

module.exports = router;
