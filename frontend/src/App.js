import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import DarkMode from './components/darkMode.js';

function App() {
  const [code, setCode] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');  // State to hold error messages

  const handleReview = async () => {
    setLoading(true);
    setError('');
    setReview(''); // Clear the old review before making the request
  
    try {
      const res = await axios.post('http://localhost:5000/api/review', { code });
      setReview(res.data.review);
    } catch (error) {
      if (error.response && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Error fetching review. Try again.');
      }
    }
  
    setLoading(false);
  };
  

  return (
    <div className="container">
      <DarkMode />
      <h1>🔍 AI Code Reviewer</h1>

      <div className="flex-container">
        <textarea
          className="code-input"
          placeholder="Paste your code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>

        {/* Display review or error in the review box */}
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

        {/* Display error message in the review box */}
        {error && (
          <div className="review-box error">
            <h3>Error:</h3>
            <p>{error}</p>
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
