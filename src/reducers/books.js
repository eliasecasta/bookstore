import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'bookCreator',
  initialState: {
    booksArray: [
      {
        Title: 'Theory of everything',
        category: 'Science',
        ID: Math.floor(Math.random() * 100) + 1,
      },
      {
        Title: 'Creative crafting',
        category: 'Arts',
        ID: Math.floor(Math.random() * 100) + 1,
      },
      {
        Title: 'Harry Potter',
        category: 'Fiction',
        ID: Math.floor(Math.random() * 100) + 1,
      },
    ],
  },

  reducers: {
    CREATE_BOOK: (state, action) => {
      // console.log(action.payload);
      state.booksArray.push(action.payload);
    },
    REMOVE_BOOK: (state, action) => {
      // console.log(action.payload);
      state.booksArray.filter((obj) => console.log(`ID ${obj.ID} ${action.payload.ID}`));
      state.booksArray.filter((obj) => obj.ID !== action.payload.ID);
      console.log(state.booksArray);
    },
  },
});

export const { CREATE_BOOK, REMOVE_BOOK } = bookSlice.actions;

export default bookSlice.reducer;
