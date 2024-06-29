import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const GeneralInfo = ({ patientId }) => {
  const [patient, setPatient] = useState(null);
console.log(patientId)
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/api/patient/onePatient/${patientId}`); 
        setPatient(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatientData();
  }, [patientId]);

  return (
    <div className="profile-container bg-custom-light p-8 rounded-lg shadow-md mx-auto w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-custom-dark">Patient Profile</h1>
      {patient && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-custom-dark-green flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2 text-custom-gray" /> {`${patient.firstName} ${patient.lastName}`}
          </h2>
          <p className="flex items-center mb-2 text-custom-dark-green">
            <FontAwesomeIcon icon={faCalendar} className="mr-2 text-custom-green" />
            <strong className="mr-1">Age:</strong> {patient.age}
          </p>
          <p className="flex items-center mb-2 text-custom-dark-green">
            <FontAwesomeIcon icon={faHome} className="mr-2 text-custom-green" />
            <strong className="mr-1">Address:</strong> {patient.address}
          </p>
          <p className="flex items-center mb-2 text-custom-dark-green">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-custom-green" />
            <strong className="mr-1">Phone:</strong> {patient.phone}
          </p>
          <p className="flex items-center mb-2 text-custom-dark-green">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-custom-green" />
            <strong className="mr-1">Email:</strong> {patient.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
