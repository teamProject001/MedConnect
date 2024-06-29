// src/components/Dashboard.js
import React from 'react';
import UpcomingAppointments from '../compo/UpcomingAppointments.jsx';
import AllPatients from '../compo/AllPatients.jsx';

function Dashboard() {
    return (
        <div className="p-8 min-h-screen" style={{ backgroundColor: '#f9f9fb' }}>
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#161813' }}>Dashboard</h1>
          <UpcomingAppointments />
          <AllPatients/>
        </div>
      );
}

export default Dashboard;
