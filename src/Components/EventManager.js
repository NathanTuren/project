import React, { useState } from 'react';

function EventManager() {
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    cost: '',
    people: 1,
    payer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditChange = (event, name, value) => {
    setEvents(prevEvents => prevEvents.map(e => e.id === event.id ? { ...e, [name]: value } : e));
  };

  const handleSubmit = () => {
    if (newEvent.people > 0 && newEvent.cost && newEvent.name) {
      const eventToAdd = {
        ...newEvent,
        id: Date.now(),
        costPerPerson: (newEvent.cost / newEvent.people).toFixed(2)
      };
      setEvents(prevEvents => [...prevEvents, eventToAdd]);
      setNewEvent({ name: '', description: '', cost: '', people: 1, payer: '' }); // Reset form
      alert(`Event added!`);
    } else {
      alert("Please fill in all fields correctly and ensure the number of people is greater than 0.");
    }
  };

  const toggleEdit = (id) => {
    setEditingId(prevId => prevId === id ? null : id);
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
      <input
        type="text"
        value={newEvent.payer}
        onChange={handleChange}
        name="payer"
        placeholder="Who paid?"
      />
      <button onClick={handleSubmit}>Add Event</button>
      <div>
        <h2>Current Events</h2>
        {events.map((event) => (
          <div key={event.id}>
            {editingId === event.id ? (
              <>
                <input
                  type="text"
                  value={event.description}
                  onChange={(e) => handleEditChange(event, 'description', e.target.value)}
                  name="description"
                />
                <input
                  type="number"
                  value={event.cost}
                  onChange={(e) => handleEditChange(event, 'cost', e.target.value)}
                  name="cost"
                />
                <input
                  type="text"
                  value={event.payer}
                  onChange={(e) => handleEditChange(event, 'payer', e.target.value)}
                  name="payer"
                />
                <button onClick={() => toggleEdit(null)}>Save</button>
              </>
            ) : (
              <div>
                <h3>{event.name} - ${event.costPerPerson} per person</h3>
                <p>{event.description}</p>
                <p>Paid by: {event.payer}</p>
                <button onClick={() => toggleEdit(event.id)}>Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventManager;
