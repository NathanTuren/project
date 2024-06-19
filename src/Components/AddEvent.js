// components/AddEvent.js
import React, { useState } from 'react';

function AddEvent() {
  
  return (
    <div>
      <h2>Add Event</h2>
      {/* Form for bill input */}
      <button onClick={() => window.location.href = '/'}>Home</button> {/* Home button */}
    </div>

  );

}


function CostInput() {
  const [cost, setCost] = useState('');

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleSubmit = () => {
    alert(`The cost entered is $${cost}`);
  };

  return (
    <div>
      <h1>Enter Cost</h1>
      <input
        type="number"
        value={cost}
        onChange={handleCostChange}
        placeholder="Enter cost"
      />
      <button onClick={handleSubmit}>Submit Cost</button>
    </div>
  );
}

export {AddEvent, CostInput};


