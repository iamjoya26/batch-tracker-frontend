import { useState } from 'react';

function Form() {
  const [batchId, setBatchId] = useState('');
  const [supplier, setSupplier] = useState('');
  const [center, setCenter] = useState('');
  const [date, setDate] = useState('');
  const [sampleSize, setSampleSize] = useState('');

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
    </div>
  );
}

export default Form;
