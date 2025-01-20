import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  features: [],
  vehicleType: '',
  location: '',
  page: 1,
};

const slice = createSlice({
  name: 'filter',
  initialState: {
    ...initialState,
  },
  reducers: {
    resetFilter(state) {
      Object.assign(state, { ...initialState });
    },
    setFilterLocation(state, action) {
      state.location = action.payload;
    },
    toggleFilterFeature(state, action) {
      if (state.features.includes(action.payload)) {
        state.features = state.features.filter(f => f !== action.payload);
      } else {
        state.features.push(action.payload);
      }
    },
    toggleFilterVehicleType(state, action) {
      state.vehicleType =
        state.vehicleType === action.payload ? '' : action.payload;
    },
    setPage(state, action) {
      console.log(action.payload);
      state.page = action.payload;
    },
  },
});

export default slice.reducer;

export const {
  resetFilter,
  setFilterLocation,
  toggleFilterFeature,
  toggleFilterVehicleType,
  setPage,
} = slice.actions;

export const selectFilterLocation = state => state.filter.location;
export const selectFilterFeatures = state => state.filter.features;
export const selectFilterVehicleType = state => state.filter.vehicleType;
export const selectFilterPage = state => state.filter.page;
