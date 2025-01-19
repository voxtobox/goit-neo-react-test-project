import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.list.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.list = state.list.filter(id => id !== action.payload);
    },
  },
});

export default slice.reducer;

export const { addFavorite, removeFavorite } = slice.actions;

export const selectFavoritesList = state => state.favorites.list;
