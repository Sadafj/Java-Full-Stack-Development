import React, { useState } from 'react';

function TableLimit() {
  const [number, setNumber] = useState('');
  const [upto, setUpto] = useState('');
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(number);
    const limit = parseInt(upto);

    if (isNaN(num) || isNaN(limit) || num <= 0 || limit <= 0) {
      setTable(['Please enter valid positive numbers for both fields.']);
      return;
    }

    const newTable = [];
    let i = 1;
    while (i <= limit) {
      newTable.push(`${num} x ${i} = ${num * i}`);
      i++;
    }
    setTable(newTable);
  };

  return (
    <div>
      <h2>Multiplication Table Generator</h2>
      <div>
        <label htmlFor="numberInput">Enter Number:</label>
        <input
          type="number"
          id="numberInput"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="uptoInput">Upto Place:</label>
        <input
          type="number"
          id="uptoInput"
          value={upto}
          onChange={(e) => setUpto(e.target.value)}
        />
      </div>
      <button onClick={generateTable}>Generate Table</button>

      {table.length > 0 && (
        <div>
          <h3>Table of {number} upto {upto}:</h3>
          <ul>
            {table.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TableLimit;