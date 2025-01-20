import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadCamperById, loadCamperList } from '../api';

export const fetchCamperItems = createAsyncThunk(
  'camper/fetchCamperItems',
  async (params = {}, thunkAPI) => {
    try {
      const data = await loadCamperList({ params });
      data.page = params.page;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  'camper/fetchCamperById',
  async (camperId, thunkAPI) => {
    try {
      return await loadCamperById(camperId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
