import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from './helpers';
import { fetchCamperItems, fetchCamperById } from './camperOps';

const slice = createSlice({
  name: 'camper',
  initialState: {
    items: [],
    current: {},
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperItems.pending, handlePending)
      .addCase(fetchCamperItems.rejected, handleRejected)
      .addCase(fetchCamperItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.rejected, handleRejected)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      });
  },
});

export default slice.reducer;

export const selectCamperItems = state => state.camper.items;
export const selectCamperLoading = state => state.camper.loading;
export const selectCamperError = state => state.camper.error;
export const selectCamperCurrent = state => state.camper.current;
