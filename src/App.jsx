import './App.css';
import Form from './components/Form';
import Processing from './components/Processing';

function App() {
  return (
    <div className="form-card">
      <h1>ONI - GRADE</h1>
      <h2>Onion Grading : New Batch</h2>
      <Form />
      <Processing />
    </div>
  );
}

export default App;
