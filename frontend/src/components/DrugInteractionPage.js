import React, { useState } from 'react';
import '../styles/DrugInteractionPage.css';

const DrugInteractionPage = () => {
  const [drugs, setDrugs] = useState('');
  const [interactionResult, setInteractionResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder interaction check
    const result = `No known interactions between: ${drugs}`;
    setInteractionResult(result);
  };

  return (
    <div className="interaction-page">
      <h2>Check Drug Compatibility</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter drug names separated by commas"
          value={drugs}
          onChange={(e) => setDrugs(e.target.value)}
          required
        />
        <button type="submit" className="interaction-button">Check Compatibility</button>
      </form>
      {interactionResult && <p className="interaction-result">{interactionResult}</p>}
    </div>
  );
};

export default DrugInteractionPage;
