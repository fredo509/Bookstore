import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categorieSlice';

const store = configureStore({
  reducer: {
    books: bookReducer,
    category: categoryReducer,
  },
});

export default store;
