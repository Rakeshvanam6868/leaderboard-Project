import "../styles/recententry.css";

const RecentEntry = ({ entry, rank }) => {
  return (
    <div className="recent-entry">
      <h3>Recent Entry</h3>
      <div className="leaderboard-entry entry-details">
        <div className="leader-left">
          <span className="rank-block">{rank}</span>
          <span className="username">{entry.username}</span>
        </div>
        <div className="time-block">
          <span className="score">{entry.score}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentEntry;
