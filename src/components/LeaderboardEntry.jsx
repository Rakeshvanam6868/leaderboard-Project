import "../styles/leaderboardEntry.css";

const LeaderboardEntry = ({ entry, rank }) => {
  let backgroundColor, textColor, rankBackgroundColor, rankTextColor, prize;

  switch (rank) {
    case 1:
      backgroundColor = 'gold';
      textColor = 'black';
      rankBackgroundColor = 'rgba(0, 0, 0, 0.9)';
      rankTextColor = 'gold';
      prize = '50,000';
      break;
    case 2:
      backgroundColor = 'silver';
      textColor = 'black';
      rankBackgroundColor = 'rgba(0, 0, 0, 0.9)';
      rankTextColor = 'silver';
      prize = '5,000';
      break;
    case 3:
      backgroundColor = '#b87333'; // Copper color
      textColor = 'white';
      rankBackgroundColor = 'rgba(0, 0, 0, 0.9)';
      rankTextColor = '#b87333';
      prize = '500';
      break;
    default:
      backgroundColor = 'rgba(0, 0, 0, 0.8)';
      textColor = 'white';
      rankBackgroundColor = 'white';
      rankTextColor = 'black';
      prize = '';
  }

  return (
    <div className="leaderboard-entry" style={{ backgroundColor, color: textColor }}>
      <div className="leader-left">
        <div className="rank-block" style={{ backgroundColor: rankBackgroundColor, color: rankTextColor }}>
          <span className="rank">{rank}</span>
        </div>
        <span className="username">{entry.username}</span>
      </div>
      <div className="time-block">
      {prize && <span className="prize">₹{prize}</span>}
      <span className="score">{entry.score}</span>
      </div>
    </div>
  );
};

export default LeaderboardEntry;
