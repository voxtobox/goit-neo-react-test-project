import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from './helpers';
import { fetchCamperItems } from './camperOps';

const slice = createSlice({
  name: 'camper',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCamperItems.pending, handlePending)
      .addCase(fetchCamperItems.rejected, handleRejected)
      .addCase(fetchCamperItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      });
  },
});

export default slice.reducer;

export const camperItems = state => state.camper.items;
export const camperItemsLoading = state => state.camper.loading;
export const camperItemsError = state => state.camper.error;

const camperItem = {
  AC: true,
  TV: true,
  bathroom: true,
  consumption: '38l/100km',
  description:
    'Embark on a luxurious journey with the Road Bear A 30-32, a fully integrated motorhome designed to elevate your travel experience. This spacious and stylish RV is perfect for families or groups of six, offering a seamless blend of comfort, convenience, and sophistication. Explore the open roads in unparalleled style with the Road Bear A 30-32.',
  engine: 'hybrid',
  form: 'fullyIntegrated',
  gallery: [
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/6-1.webp',
      full: 'https://ftp.goit.study/img/campers-test-task/6-1-full.webp',
    },
    {
      thumb: 'https://ftp.goit.study/img/campers-test-task/6-2.webp',
      full: 'https://ftp.goit.study/img/campers-test-task/6-2-full.webp',
    },
  ],
  gas: true,
  height: '3.95m',
  id: '6',
  kitchen: true,
  length: '9.45m',
  location: 'Ukraine, Kharkiv',
  microwave: true,
  name: 'Road Bear A 30-32',
  price: 14000,
  radio: true,
  rating: 4.4,
  refrigerator: true,
  reviews: [
    {
      reviewer_name: 'Alice',
      reviewer_rating: 5,
      review: 'Amazing experience! Super comfortable and well-equipped.',
    },
    {
      reviewer_name: 'Bob',
      reviewer_rating: 3,
      review: 'Good but could have been cleaner.',
    },
  ],
  tank: '302l',
  transmission: 'automatic',
  water: true,
  width: '2.65m',
};
