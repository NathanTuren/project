import React, { useState } from 'react';
import './App.css'; // Import app.css file for styles
import EventManager from './Components/EventManager';
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
        <h1>DivideWell</h1>
        <div className="landing-buttons">
          <button onClick={() => navigateTo('/EventManager')}>Add Event</button>
          <button onClick={() => navigateTo('/person-form')}>Person Form</button>
          <button onClick={() => navigateTo('/bill-summary')}>Bill Summary</button>
        </div>
        <div>
          <button className='tester-button' onClick={() => navigateTo('/AddEvent')}>Test Button</button>
        </div>
      </div>
    );
  };



  const renderRoute = () => {
    switch (route) {
      case '/EventManager':
        return <EventManager/>;
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
