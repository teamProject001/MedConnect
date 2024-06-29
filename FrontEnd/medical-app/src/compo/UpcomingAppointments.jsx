// src/components/UpcomingAppointments.js
import React, { useEffect, useState } from 'react';

function UpcomingAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/appointement/upcoming') 
      .then(response => response.json())
      .then(data => setAppointments(data))
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

 
  return (
    <div className="p-4 rounded-lg shadow-lg" style={{ backgroundColor: '#f9f9fb' }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: '#161813' }}>Upcoming Appointments</h2>
      <ul className="divide-y" style={{ borderColor: '#acb1b8' }}>
        {appointments.map(appointment => (
          <li key={appointment._id} className="py-4 flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold" style={{ color: '#161813' }}>{appointment.patient.firstName} {appointment.patient.lastName}</p>
              <p className="text-sm" style={{ color: '#acb1b8' }}>{appointment.reason}</p>
            </div>
            <p className="text-sm" style={{ color: '#161813' }}>{new Date(appointment.appointmentDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingAppointments;
