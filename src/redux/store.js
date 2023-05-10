import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoryReducer from './categories/categorieSlice';

const reducer = combineReducers({
  bookReducer,
  categoryReducer,
});

const store = configureStore({ reducer });
export default store;
