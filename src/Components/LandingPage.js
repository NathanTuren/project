import React from 'react';

const LandingPage = ({ setCurrentPage }) => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <ul>
        <li><button onClick={() => setCurrentPage('event-manager')}>Event Manager</button></li>
        <li><button onClick={() => setCurrentPage('person-form')}>Person Form</button></li>
        <li><button onClick={() => setCurrentPage('bill-summary')}>Bill Summary</button></li>
      </ul>
    </div>
  );
};

export default LandingPage;

