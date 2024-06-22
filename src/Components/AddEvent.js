// components/AddEvent.js
import React, { useState } from 'react';

function AddEvent() {
  const [cost, setCost] = useState('');
  const [people, setPeople] = useState(1); // Default to 1 person if not specified

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };

  const handleSubmit = () => {
    if (people > 0) {
      const costPerPerson = calculateCostPerPerson(cost, people);
      alert(`Each person owes: $${costPerPerson.toFixed(2)}`);
    } else {
      alert("Please enter a valid number of people (greater than 0).");
    }
  };

  // Function to calculate the cost per person
  const calculateCostPerPerson = (totalCost, numberOfPeople) => {
    return totalCost / numberOfPeople;
  };

  return (
    <div>
      <h2>Enter Cost and Number of People</h2>
      <input
        type="number"
        value={cost}
        onChange={handleCostChange}
        placeholder="Enter total cost"
      />
      <input
        type="number"
        value={people}
        min="1"
        onChange={handlePeopleChange}
        placeholder="Number of people"
      />
      <button onClick={handleSubmit}>Split Cost</button>
    </div>
  );
}

export default AddEvent;
