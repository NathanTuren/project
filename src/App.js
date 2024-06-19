import React, { useState } from 'react';
import './App.css'; // Import app.css file for styles
import BillForm from './Components/BillForm';
import PersonForm from './Components/PersonForm';
import BillSummary from './Components/BillSummary';

function App() {
  const [route, setRoute] = useState(window.location.pathname);

  const navigateTo = (newRoute) => {
    setRoute(newRoute);
    window.history.pushState(null, '', newRoute);
  };

  const renderLandingPage = () => {
    return (
      <div className="App">
        <h1>Bill Splitter</h1>
        <div className="landing-buttons">
          <button onClick={() => navigateTo('/bill-form')}>Bill Form</button>
          <button onClick={() => navigateTo('/person-form')}>Person Form</button>
          <button onClick={() => navigateTo('/bill-summary')}>Bill Summary</button>
        </div>
      </div>
    );
  };

  const renderRoute = () => {
    switch (route) {
      case '/bill-form':
        return <BillForm />;
      case '/person-form':
        return <PersonForm />;
      case '/bill-summary':
        return <BillSummary />;
      default:
        return renderLandingPage(); // Render landing page by default
    }
  };

  return (
    <div>
      {renderRoute()}
    </div>
  );
}

export default App;
