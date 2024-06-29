import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GeneralInfo from '../compo/GeneralInfo.jsx';
import PatientDetailsBoard from '../compo/patientDetails.jsx';

function PatientProfile() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/patient/onePatient/${id}`);
        const data = await response.json();
        setPatient(data);
      } catch (error) {
        console.error('Error fetching patient:', error);
      }
    };

    fetchPatient();
  }, [id]);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/details`);
        const data = await response.json();
        setPatientDetails(data);
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };

    fetchPatientDetails();
  }, [id]);

  if (!patient || !patientDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container bg-gray-100 p-8 rounded-lg shadow-md">
      <GeneralInfo patientId={patient._id} />
      <PatientDetailsBoard patientDetails={patientDetails} />
    </div>
  );
}

export default PatientProfile;
