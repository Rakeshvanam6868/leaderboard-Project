import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [
    {id:1, username: 'Rishi', score: '00:56:23' },
    {id:2, username: 'Harsha', score: '00:56:23' },
    {id:3, username: 'Prabhas', score: '00:56:23' },
    {id:4, username: 'Dibas', score: '00:56:23' },
    {id:5, username: 'Chidu', score: '00:56:23' },
    {id:6, username: 'Rohit', score: '00:56:23' },
    {id:7, username: 'Yashwant', score: '00:56:23' },
    {id:8, username: 'Sai', score: '00:56:23' },
    {id:9, username: 'Sai Krishna', score: '00:56:23' },
    {id:10, username: 'Adithya', score: '00:56:23' },
  ],
  recentEntry: null,
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addEntry: (state, action) => {
      state.entries.push(action.payload);
      state.entries.sort((a, b) => a.score.localeCompare(b.score));
      state.recentEntry = action.payload;
    },
  },
});

export const { addEntry } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
