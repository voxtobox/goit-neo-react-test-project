import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import camperReducer from './camperSlice';
import favoritesReducer from './favoritesSlice';
import filterReducer from './filterSlice';

// Add persist for favorite list
const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['list'],
};

const persistedFavoritesReducer = persistReducer(
  favoritesPersistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    camper: camperReducer,
    favorites: persistedFavoritesReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
