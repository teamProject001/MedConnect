const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: true
    },
    notes: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Appointment =mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment 
