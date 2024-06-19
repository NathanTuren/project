import React from 'react';

function PersonForm() {
  return (
    <div>
      <h2>Person Form</h2>
      {/* Form for person input */}
      
      <button onClick={() => window.location.href = '/'}>Home</button> {/* Home button */}
    </div>
  );
}

export default PersonForm;
