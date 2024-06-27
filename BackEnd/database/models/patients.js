const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientModel = new Schema(
    
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
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
        createdAt: {
            type: Date,
            default: Date.now
        }
    }

);


module.exports = mongoose.model("patients", PatientModel);