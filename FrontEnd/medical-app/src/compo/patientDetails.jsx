import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faListAlt, faClipboardList, faFileMedicalAlt, faThermometer, faStickyNote, faUserMd } from '@fortawesome/free-solid-svg-icons';

const PatientDetailsBoard = ({ patientDetails}) => {
console.log(patientDetails)
  

  return (
    <div className="patient-details-board container mx-auto bg-custom-light p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-custom-dark">Patient Details</h2>
      {patientDetails && (
        <div className="patient-details">
          <section className="mb-6 bg-custom-dark text-white rounded p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faHeart} className="mr-2 text-custom-green" />
              General Information
            </h3>
            <p><strong>Heart Rate:</strong> {patientDetails.heartRate}</p>
            <p><strong>Allergies:</strong> {patientDetails[0].allergies.join(', ')}</p>
            <p><strong>Weight:</strong> {patientDetails.weight} kg</p>
            <p><strong>Height:</strong> {patientDetails.height} cm</p>
          </section>

          <section className="mb-6 bg-custom-dark-green text-white rounded p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faListAlt} className="mr-2 text-custom-green" />
              Medical History
            </h3>
            {patientDetails.medicalHistory.map((history, index) => (
              <div key={index} className="mb-2">
                <p><strong>Date:</strong> {new Date(history.date).toLocaleDateString()}</p>
                <p><strong>Detail:</strong> {history.detail}</p>
              </div>
            ))}
          </section>

          <section className="mb-6 bg-custom-green text-white rounded p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faClipboardList} className="mr-2 text-custom-dark" />
              Medications
            </h3>
            {patientDetails.medications.map((medication, index) => (
              <div key={index} className="mb-2">
                <p><strong>Name:</strong> {medication.name}</p>
                <p><strong>Dosage:</strong> {medication.dosage}</p>
                <p><strong>Frequency:</strong> {medication.frequency}</p>
                <p><strong>Start Date:</strong> {new Date(medication.startDate).toLocaleDateString()}</p>
              </div>
            ))}
          </section>

          <section className="mb-6 bg-custom-gray text-white rounded p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faFileMedicalAlt} className="mr-2 text-custom-dark" />
              Lab Results
            </h3>
            {patientDetails.labResults.map((result, index) => (
              <div key={index} className="mb-2">
                <p><strong>Test Name:</strong> {result.testName}</p>
                <p><strong>Date:</strong> {new Date(result.date).toLocaleDateString()}</p>
                <p><strong>Result:</strong> {result.result}</p>
              </div>
            ))}
          </section>

          <section className="mb-6 bg-custom-dark text-white rounded p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faThermometer} className="mr-2 text-custom-green" />
              Vital Signs
            </h3>
            {patientDetails.vitalSigns.map((sign, index) => (
              <div key={index} className="mb-2">
                <p><strong>Date:</strong> {new Date(sign.date).toLocaleDateString()}</p>
                <p><strong>Blood Pressure:</strong> {sign.bloodPressure}</p>
                <p><strong>Temperature:</strong> {sign.temperature} °C</p>
                <p><strong>Respiration Rate:</strong> {sign.respirationRate}</p>
              </div>
            ))}
          </section>
          
          <section className="mb-6 bg-custom-dark-green text-white rounded p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faStickyNote} className="mr-2 text-custom-green" />
              Notes
            </h3>
            {patientDetails.notes.map((note, index) => (
              <div key={index} className="mb-2">
                <p><strong>Date:</strong> {new Date(note.date).toLocaleDateString()}</p>
                <p><strong>Detail:</strong> {note.detail}</p>
              </div>
            ))}
          </section>

          <section className="mb-6 bg-custom-gray text-black rounded p-4">
            <h3 className="text-xl font-semibold mb-2">Emergency Contact</h3>
            <p>{patientDetails.emergencyContact}</p>
          </section>

          <section className="bg-white text-black rounded p-4">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FontAwesomeIcon icon={faUserMd} className="mr-2 text-custom-dark" />
              Primary Care Physician
            </h3>
            <p>{patientDetails.primaryCarePhysician}</p>
          </section>
        </div>
      )}
    </div>
  );
};

export default PatientDetailsBoard;
