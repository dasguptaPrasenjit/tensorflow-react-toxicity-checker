// src/App.jsx
import React, { useState, useEffect } from 'react';
import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs';
import './App.css';

const threshold = 0.5;

export default function App() {
  const [model, setModel] = useState(null);
  const [inputText, setInputText] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    toxicity.load(threshold).then(setModel);
  }, []);

  const handleCheck = async () => {
    if (model && inputText.trim() !== '') {
      setLoading(true);
      const results = await model.classify([inputText]);
      setPredictions(results);
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="content-box">
        <h1 className="title">🌈 Toxicity Checker</h1>
        <textarea
          rows="4"
          className="input-area"
          placeholder="Type your message here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button
          onClick={handleCheck}
          disabled={!model || loading}
          className="analyze-button"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>

        {predictions.length > 0 && (
          <div className="results-box">
            <h2 className="results-title">Results:</h2>
            <table className="results-table">
              <thead>
                <tr>
                  <th>Label</th>
                  <th>Toxic?</th>
                  <th>Confidence</th>
                </tr>
              </thead>
              <tbody>
                {predictions.map((pred) => (
                  <tr key={pred.label}>
                    <td>{pred.label}</td>
                    <td className={pred.results[0].match ? 'toxic' : 'non-toxic'}>
                      {pred.results[0].match ? 'Yes' : 'No'}
                    </td>
                    <td>{(pred.results[0].probabilities[1] * 100).toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
