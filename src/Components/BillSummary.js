// components/BillSummary.js
import React from 'react';

function BillSummary() {
  return (
    <div>
      <h2>Bill Summary</h2>
      {/* Summary of bill */}
      <button onClick={() => window.location.href = '/'}>Home</button> {/* Home button */}
    </div>
  );
}

export default BillSummary;
