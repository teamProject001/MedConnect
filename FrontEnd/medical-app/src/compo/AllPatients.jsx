import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AllPatients() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/patient/allPatients')
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching patients:', error));
  }, []);

  const handlePatientClick = (patientId) => {
    navigate(`/patients/${patientId}`);
  };

  return (
    <div
      className="patient-list"
      style={{
        backgroundColor: '#454f31', // Background color (specified)
        width: '50%', // Set width to half the viewport
        color: '#f9f9fb', // Text color (lightest)
        borderRadius: '5px', // Add some rounded corners
        padding: '20px', // Add some padding
        margin: '20px auto', // Center the component horizontally
      }}
    >
      <h2 className="text-2xl font-semibold text-white mb-4">All Patients</h2>
      <ul className="patient-list-items">
        {patients.map(patient => (
          <li key={patient._id} className="patient-item">
            <button
              onClick={() => handlePatientClick(patient._id)}
              className="patient-item-button text-lg font-normal text-white hover:underline focus:outline-none" // Use font-normal for a lighter font
              style={{
                backgroundColor: '#373d2f', // Darker shade of #454f31
                padding: '10px 20px', // Adjust button padding
                border: 'none', // Remove default button border
                cursor: 'pointer', // Indicate clickable element
                transition: 'background-color 0.2s ease-in-out', // Add smooth hover effect
                borderRadius: '15px', // More rounded corners
              }}
            >
              {patient.firstName} {patient.lastName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllPatients;
