import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../utils/leaderboardSlice';
import "../styles/addScore.css";

const AddScorePopup = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (username.trim() === '' || score.trim() === '') {
      setError('Username and Score cannot be empty.');
      return;
    }

    // Ensure the score is in the correct format (MM:SS:MS)
    const scorePattern = /^[0-5][0-9]:[0-5][0-9]:[0-9]{1,3}$/;
    if (!scorePattern.test(score)) {
      setError('Score must be in the format MM:SS:MS.');
      return;
    }

    dispatch(addEntry({ id: Date.now(), username, score }));
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Score</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="MM:SS:MS"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <div className="buttons">
          <button className="first-btn btn" onClick={handleSubmit}>Add</button>
          <button className="sec-btn btn" onClick={closePopup}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddScorePopup;
