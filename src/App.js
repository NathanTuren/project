import React, { useState } from 'react';
import BillForm from './Components/BillForm';
import PersonForm from './Components/PersonForm';
import BillSummary from './Components/BillSummary';

function App() {
  const [route, setRoute] = useState(''); // State to manage current route

  const navigateTo = (newRoute) => {
    setRoute(newRoute);
  };

  // Render components based on the current route state
  const renderRoute = () => {
    switch (route) {
      case 'bill-form':
        return <BillForm />;
      case 'person-form':
        return <PersonForm />;
      case 'bill-summary':
        return <BillSummary />;
      default:
        return <h2>Welcome to Bill Splitter App</h2>;
    }
  };

  return (
    <div className="App">
      <h1>Bill Splitter</h1>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigateTo('bill-form')}>Bill Form</button>
          </li>
          <li>
            <button onClick={() => navigateTo('person-form')}>Person Form</button>
          </li>
          <li>
            <button onClick={() => navigateTo('bill-summary')}>Bill Summary</button>
          </li>
        </ul>
      </nav>

      {/* Render component based on current route */}
      {renderRoute()}
    </div>
  );
}

export default App;
