import React, { useState } from 'react';

function TablePrint() {
  const [tableNumber, setTableNumber] = useState('');
  const [tableResults, setTableResults] = useState([]);

  const handleInputChange = (event) => {
    setTableNumber(event.target.value);
  };

  const generateTable = () => {
    const num = parseInt(tableNumber);
    if (isNaN(num)) {
      setTableResults([]);
      return;
    }

    const results = [];
    for (let i = 1; i <= 20; i++) {
      results.push(`${num} x ${i} = ${num * i}`);
    }
    setTableResults(results);
  };

  return (
    <div>
      <h1>Multiplication Table Generator</h1>
      <input
        type="number"
        value={tableNumber}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={generateTable}>Generate Table</button>

      {tableResults.length > 0 && (
        <div>
          <h2>Table of {tableNumber}:</h2>
          <ul>
            {tableResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TablePrint;