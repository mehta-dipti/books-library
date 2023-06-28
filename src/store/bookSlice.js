import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: null,
    pages: {
      currentPage: 1,
      pageSize: 25,
      sortDirection: "ASC",
    },
    filters: {},
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setBooks, setPages, setFilters } = bookSlice.actions;

export default bookSlice.reducer;
