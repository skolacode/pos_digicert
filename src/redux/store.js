import {configureStore} from '@reduxjs/toolkit';
import settingsSlice from './settingsSlice'
import itemsSlice from './itemsSlice'

export const store = configureStore({
  reducer: {
    settings: settingsSlice,
    items: itemsSlice,
  },
});
