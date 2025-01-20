import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    features: [],
    vehicleType: '',
    location: '',
  },
  reducers: {
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
  },
});

export default slice.reducer;

export const {
  setFilterLocation,
  toggleFilterFeature,
  toggleFilterVehicleType,
} = slice.actions;

export const selectFilterLocation = state => state.filter.location;
export const selectFilterFeatures = state => state.filter.features;
export const selectFilterVehicleType = state => state.filter.vehicleType;
