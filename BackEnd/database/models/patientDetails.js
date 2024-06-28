
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientDetailsSchema = new mongoose.Schema({

  patients: { type: Schema.Types.ObjectId, ref: 'patients', required: true },
  heartRate: {
    type: Number,
    required: true
  },
  allergies: {
    type: [String],
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  medicalHistory: [
    {
      date: Date,
      detail: String,
    },
  ],
  medications: [
    {
      name: String,
      dosage: String,
      frequency: String,
      startDate: Date,
    },
  ],
  labResults: [
    {
      testName: String,
      date: Date,
      result: String,
    },
  ],
  vitalSigns: [
    {
      date: Date,
      bloodPressure: String,
      temperature: Number,
      respirationRate: Number,
    },
  ],
  notes: [
    {
      date: Date,
      detail: String,
    },
  ],
  emergencyContact: String,
  primaryCarePhysician: String,
});

const PatientDetails =mongoose.model('PatientDetails', PatientDetailsSchema);


module.exports = PatientDetails