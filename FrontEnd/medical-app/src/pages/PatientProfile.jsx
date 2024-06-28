import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PatientProfile() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/patient/onePatient/${id}`)
      .then(response => response.json())
      .then(data => setPatient(data))
      .catch(error => console.error('Error fetching patient:', error));
  }, [id]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="patient-name text-3xl font-bold text-gray-800 mb-4">
        {patient.firstName} {patient.lastName}
      </h1>
      <div className="patient-details flex flex-col space-y-4">
        <h2 className="details-heading text-xl font-semibold text-gray-800">
          Patient Details
        </h2>
        <div className="details-list flex flex-col space-y-2">
          <p className="detail-item text-gray-700">
            <strong>Age:</strong> {patient.age}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Gender:</strong> {patient.gender}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Address:</strong> {patient.address}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Phone:</strong> {patient.phone}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Email:</strong> {patient.email}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Heart Rate:</strong> {patient.heartRate}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Allergies:</strong> {patient.allergies.join(', ')}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Weight:</strong> {patient.weight}
          </p>
          <p className="detail-item text-gray-700">
            <strong>Height:</strong> {patient.height}
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default PatientProfile;
