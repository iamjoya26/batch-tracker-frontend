import { useState } from 'react';

function Form({ onNext }) {
  const [batchId, setBatchId] = useState('');
  const [supplier, setSupplier] = useState('');
  const [center, setCenter] = useState('');
  const [date, setDate] = useState('');
  const [sampleSize, setSampleSize] = useState('');

  // Today's date in YYYY-MM-DD format (required by the date input's max attribute)
  const today = new Date().toISOString().split('T')[0];

  const handleSampleSizeChange = (e) => {
    const value = e.target.value;

    // Allow empty (so user can clear and retype)
    if (value === '') {
      setSampleSize(value);
      return;
    }

    // Only allow whole positive numbers (no negatives, no decimals)
    const isWholeNumber = /^[0-9]+$/.test(value);

    if (isWholeNumber) {
      setSampleSize(value);
    }
  };

  const handleNext = () => {
    // Batch ID: only letters and numbers (or a combination), no spaces/symbols
    const batchIdPattern = /^[a-zA-Z0-9]+$/;
    if (!batchId || !batchIdPattern.test(batchId)) {
      alert('Batch ID must contain only letters and/or numbers (no spaces or symbols).');
      return;
    }

    // Supplier: only letters and spaces (a valid name)
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!supplier || !namePattern.test(supplier)) {
      alert('Supplier must contain only letters (no numbers or symbols).');
      return;
    }

    // Center: only letters and spaces (a valid name)
    if (!center || !namePattern.test(center)) {
      alert('Center must contain only letters (no numbers or symbols).');
      return;
    }

    // Date: must be filled and not a future date
    if (!date) {
      alert('Please select a valid date.');
      return;
    }
    const selectedDate = new Date(date);
    const todayDate = new Date();
    todayDate.setHours(23, 59, 59, 999);
    if (isNaN(selectedDate.getTime()) || selectedDate > todayDate) {
      alert('Please select a valid date (today or earlier).');
      return;
    }

    // Sample Size: must be a positive number
    if (!sampleSize || Number(sampleSize) <= 0) {
      alert('Sample Size must be a valid number greater than 0.');
      return;
    }

    onNext();
  };

  return (
    <div>
      <div className="field-row">
        <label>Batch ID: </label>
        <input type="text" value={batchId} onChange={(e) => setBatchId(e.target.value)} />
      </div>

      <div className="field-row">
        <label>Supplier: </label>
        <input type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} />
      </div>

      <div className="field-row">
        <label>Center: </label>
        <input type="text" value={center} onChange={(e) => setCenter(e.target.value)} />
      </div>

      <div className="field-row">
        <label>Date: </label>
        <input
          type="date"
          value={date}
          max={today}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="field-row">
        <label>Sample Size: </label>
        <input
          type="text"
          inputMode="numeric"
          value={sampleSize}
          onChange={handleSampleSizeChange}
        />
      </div>

      <div className="field-row">
      <button className="submit-btn" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Form;