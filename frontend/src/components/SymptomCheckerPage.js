import React, { useState } from 'react';
import '../styles/SymptomCheckerPage.css';

const SymptomCheckerPage = () => {
  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder diagnosis logic
    const possibleDiagnosis = `Diagnosed based on symptoms: ${symptoms}`;
    setDiagnosis(possibleDiagnosis);
  };

  return (
    <div className="symptom-page">
      <h2>Symptom Checker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter symptoms separated by commas"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          required
        />
        <button type="submit" className="symptom-button">Check Symptoms</button>
      </form>
      {diagnosis && <p className="diagnosis-result">{diagnosis}</p>}
    </div>
  );
};

export default SymptomCheckerPage;
