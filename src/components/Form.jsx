import { useState } from 'react';

function Form({ onNext }) {
  const [batchId, setBatchId] = useState('');
  const [supplier, setSupplier] = useState('');
  const [center, setCenter] = useState('');
  const [date, setDate] = useState('');
  const [sampleSize, setSampleSize] = useState('');

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
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    if (isNaN(selectedDate.getTime()) || selectedDate > today) {
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
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div className="field-row">
        <label>Sample Size: </label>
        <input type="number" value={sampleSize} onChange={(e) => setSampleSize(e.target.value)} />
      </div>

      <div className="field-row">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Form;