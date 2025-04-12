// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/review', { code });
      setReview(res.data.review);
    } catch (error) {
      setReview('Error fetching review. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>🔍 AI Code Reviewer</h1>

      <div className="flex-container">
        <textarea
          className="code-input"
          placeholder="Paste your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>

        {review && (
          <div className="review-box">
            <h3>Review:</h3>
            <ul>
                {review
                  .split('\n')
                  .filter((point) => /^[-*•]/.test(point)) // ✅ Only include actual bullet points
                  .map((point, idx) => (
                  <li key={idx}>{point.replace(/^[-*•]\s*/, '')}</li>
                ))}
            </ul>

          </div>
        )}
      </div>

      <button className="review-button" onClick={handleReview} disabled={loading}>
        {loading ? 'Reviewing...' : 'Review Code'}
      </button>
    </div>
  );
}

export default App;
