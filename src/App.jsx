import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ImageUpload from './components/ImageUpload';
import Processing from './components/Processing';

function App() {
  const [stage, setStage] = useState('form');
  return (
    <div className="form-card">
      <h1>ONI - GRADE</h1>
      <h2>Onion Grading : New Batch</h2>
      {stage === 'form' && <Form onNext={() => setStage('upload')} />}
      {stage === 'upload' && <ImageUpload />}
      {stage === 'processing' && <Processing />}
    </div>
  );
}

export default App;
