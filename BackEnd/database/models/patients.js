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
        age: {
            type: Date,
            required: true
        },
        phone : {
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
       
        createdAt: {
            type: Date,
            default: Date.now
        }
    }

);

const  patients = mongoose.model("patients", PatientModel);
module.exports = patients