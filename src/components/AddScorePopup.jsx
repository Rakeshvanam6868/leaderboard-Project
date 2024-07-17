import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../utils/leaderboardSlice';
import "../styles/addScore.css";
const AddScorePopup = ({ closePopup }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addEntry({ id: Date.now(), username, score }));
    closePopup();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Add Score</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="MM:SS::MSS"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <div className="buttons">
        <button className='first-btn btn' onClick={handleSubmit}>Add</button>
        <button className="sec-btn btn" onClick={closePopup}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddScorePopup;
