
const PatientDetails = require('../database/models/patientDetails.js');

// Create a new patient details
exports.createPatientDetails = async (req, res) => {
  try {
    const patientDetails = new PatientDetails(req.body);
    await patientDetails.save();
    res.status(201).json(patientDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all patients details
exports.getAllPatientDetails = async (req, res) => {
  try {
    const patients = await PatientDetails.find();
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single patient details
exports.getPatientDetailsById = async (req, res) => {
  try {
    const patient = await PatientDetails.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a patient details
exports.updatePatientDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPatientDetails = await PatientDetails.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPatientDetails) {
      return res.status(404).json({ message: 'Patient details not found' });
    }
    res.json(updatedPatientDetails);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a patient details
exports.deletePatientDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPatientDetails = await PatientDetails.findByIdAndDelete(id);
    if (!deletedPatientDetails) {
      return res.status(404).json({ message: 'Patient details not found' });
    }
    res.json({ message: 'Patient details deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
