// components/AddEvent.js
import React, { useState } from 'react';

function EventManager() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    cost: '',
    people: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (newEvent.people > 0 && newEvent.cost && newEvent.name) {
      const costPerPerson = newEvent.cost / newEvent.people;
      const eventToAdd = {
        ...newEvent,
        costPerPerson: costPerPerson.toFixed(2)
      };
      setEvents(prevEvents => [...prevEvents, eventToAdd]);
      setNewEvent({ name: '', description: '', cost: '', people: 1 }); // Reset form
      alert(`Event added! ${newEvent.name} - Each person owes: $${costPerPerson.toFixed(2)}`);
    } else {
      alert("Please fill in all fields correctly and ensure the number of people is greater than 0.");
    }
  };

  return (
    <div>
      <h1>Event Manager</h1>
      <input
        type="text"
        value={newEvent.name}
        onChange={handleChange}
        name="name"
        placeholder="Event name"
      />
      <textarea
        value={newEvent.description}
        onChange={handleChange}
        name="description"
        placeholder="Event description"
      />
      <input
        type="number"
        value={newEvent.cost}
        onChange={handleChange}
        name="cost"
        placeholder="Total cost"
      />
      <input
        type="number"
        value={newEvent.people}
        onChange={handleChange}
        name="people"
        min="1"
        placeholder="Number of people"
      />
      <button onClick={handleSubmit}>Add Event</button>
      <div>
        <h2>Current Events</h2>
        {events.map((event, index) => (
          <div key={index}>
            <h3>{event.name} - {event.costPerPerson} per person</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventManager;
