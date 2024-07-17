import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import LeaderboardEntry from './LeaderboardEntry';
import RecentEntry from './RecentEntry';
import '../styles/leaderboard.css';

const Leaderboard = () => {
  const entries = useSelector((state) => state.leaderboard.entries);
  const recentEntry = useSelector((state) => state.leaderboard.recentEntry);
  const entryRefs = useRef([]);

  useEffect(() => {
    if (recentEntry) {
      const index = entries.findIndex((entry) => entry.id === recentEntry.id);
      if (index !== -1 && entryRefs.current[index]) {
        entryRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [recentEntry, entries]);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        {entries.map((entry, index) => (
          <div key={entry.id} ref={(el) => (entryRefs.current[index] = el)}>
            <LeaderboardEntry entry={entry} rank={index + 1} />
          </div>
        ))}
      </div>
      {recentEntry && (
        <div className="recent-entry-container">
          <RecentEntry entry={recentEntry} rank={entries.findIndex((entry) => entry.id === recentEntry.id) + 1} />
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
