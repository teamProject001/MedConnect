// controllers/patientController.js

const Patient = require('../database/models/patients');

// Get all patients
exports.getPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single patient
exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new patient
exports.createPatient = async (req, res) => {
    const {
        firstName,
        lastName,
        dateOfBirth,
        contactNumber,
        email,
        address,
        heartRate,
        allergies,
        weight,
        height
    } = req.body;

    try {
        const newPatient = new Patient({
            firstName,
            lastName,
            dateOfBirth,
            contactNumber,
            email,
            address,
            heartRate,
            allergies,
            weight,
            height
        });

        const patient = await newPatient.save();
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a patient
exports.updatePatient = async (req, res) => {
    const {
        firstName,
        lastName,
        dateOfBirth,
        contactNumber,
        email,
        address,
        heartRate,
        allergies,
        weight,
        height
    } = req.body;

    try {
        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            {
                firstName,
                lastName,
                dateOfBirth,
                contactNumber,
                email,
                address,
                heartRate,
                allergies,
                weight,
                height
            },
            { new: true }
        );
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndDelete(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json({ message: 'Patient deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
