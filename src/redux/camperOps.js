import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadCamperById, loadCamperList } from '../api';

export const fetchCamperItems = createAsyncThunk(
  'camper/fetchCamperItems',
  async (_, thunkAPI) => {
    try {
      return await loadCamperList();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'camper/fetchCamperById',
  async (camperId, thunkAPI) => {
    try {
      return await loadCamperById(camperId);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
