import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: [
    {id:1, username: 'Rohit', score: '00:56:23' },
    {id:2, username: 'Kohli', score: '00:56:23' },
    {id:3, username: 'Pant', score: '00:56:23' },
    {id:4, username: 'Sky', score: '00:56:23' },
    {id:5, username: 'Dube', score: '00:56:23' },
    {id:6, username: 'Hardhik', score: '00:56:23' },
    {id:7, username: 'Axar', score: '00:56:23' },
    {id:8, username: 'Kuldeep', score: '00:56:23' },
    {id:9, username: 'Arshadeep', score: '00:56:23' },
    {id:10, username: 'Bumrah', score: '00:56:23' },
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
