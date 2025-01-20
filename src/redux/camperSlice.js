import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from './helpers';
import { fetchCamperItems, fetchCamperById } from './camperOps';

const slice = createSlice({
  name: 'camper',
  initialState: {
    items: [],
    itemsTotal: 0,
    current: {},
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperItems.pending, handlePending)
      .addCase(fetchCamperItems.rejected, (state, action) => {
        handleRejected(state, action);
        state.items = [];
        state.itemsTotal = 0;
      })
      .addCase(fetchCamperItems.fulfilled, (state, action) => {
        const { items, total, page } = action.payload;
        state.loading = false;
        if (page > 1) {
          state.items = state.items.concat(items);
          // To be sure only uniq items includes
          state.items = Array.from(
            new Map(state.items.map(item => [item.id, item])).values()
          );
        } else state.items = items;
        state.itemsTotal = total;
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
export const selectCamperItemsTotal = state => state.camper.itemsTotal;
export const selectCamperItemsLoadedNumber = state => state.camper.items.length;
export const selectCamperLoading = state => state.camper.loading;
export const selectCamperError = state => state.camper.error;
export const selectCamperCurrent = state => state.camper.current;
