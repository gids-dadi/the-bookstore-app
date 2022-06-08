// CONST
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const initialState = [
  {
    id: 1,
    title: 'War and Peace',
    author: 'Leo Tolstoy',
  },
  {
    id: 2,
    title: 'Middlemarch',
    author: 'George Eliot',
  },
  {
    id: 3,
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain',
  },
];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

// Action Creators
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
