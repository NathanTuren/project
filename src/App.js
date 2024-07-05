import React, {useState} from 'react';
import './App.css'; // Import app.css file for styles
import EventManager from './Components/EventManager';
import PersonForm from './Components/PersonForm';
import BillSummary from './Components/BillSummary';
import LandingPage from './Components/LandingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'event-manager':
        return <EventManager setCurrentPage={setCurrentPage} />;
      case 'person-form':
        return <PersonForm setCurrentPage={setCurrentPage}/>;
      case 'bill-summary':
        return <BillSummary setCurrentPage={setCurrentPage} />;
      default:
        return <LandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
