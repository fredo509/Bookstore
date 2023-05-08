const ADD = 'ADD';
const REMOVE = 'REMOVE';

const initialState = [];

export const addBook = (bookObj) => ({
  type: ADD,
  payload: bookObj,
});

export const removeBook = (index) => ({
  type: REMOVE,
  payload: index,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
