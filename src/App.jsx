import './App.css';
import Form from './components/Form';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <div className="form-card">
      <h1>ONI - GRADE</h1>
      <h2>Onion Grading : New Batch</h2>
      <Form />
      <ImageUpload />
    </div>
  );
}

export default App;
