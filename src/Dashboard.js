import React, { useEffect, useState } from "react";
import { fetchBooks, postBooks, updateBook } from "./api/booksApi";
import { useDispatch, useSelector } from "react-redux";
import { setBooks, setPages } from "./store/bookSlice";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchBar from "./SearchBar";
import "./index.css";
import Pagination from "./Pagination";
import EditIcon from "@mui/icons-material/Edit";
import AddBook from "./AddBook";

const useStyles = makeStyles(() => ({
  booksListContainer: {
    width: "200px",
    padding: "10px",
    margin: "20px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  const [bookList, setBookList] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [editBook, setEditBook] = useState(null);

  const dispatch = useDispatch();

  const pages = useSelector((state) => {
    return state.books.pages;
  });

  const filters = useSelector((state) => state.books.filters);

  useEffect(() => {
    const getBooks = async () => {
      const books = await fetchBooks(pages, filters);
      setBookList(books.data);
      dispatch(setBooks(books.data));
      dispatch(setPages(books.pagination));
    };
    getBooks();
  }, [pages.currentPage, pages.sortDirection, filters]);

  const handleOnSearch = (e) => {
    const searchedBooks = e.target.value;
    if (searchedBooks) {
      let books = bookList;
      books = books.filter((book) => book.title && book.title.toLowerCase().includes(searchedBooks.toLowerCase()));
      setSearchResult(books);
    } else {
      setSearchResult(null);
    }
  };

  const onAddToBookList = (newBookData) => {
    postBooks(newBookData);
  };

  const onEditBook = (bookData) => {
    console.log(bookData);
    updateBook(bookData);

    setEditBook(null);
  };

  return (
    <>
      <div className="dashboard">
        <div className="left-section">
          <SearchBar handleOnSearch={handleOnSearch} />
          <div className="cards-container">
            {(searchResult ? searchResult : bookList)?.map((book) => (
              <Paper elevation={4} className={classes.booksListContainer}>
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Pages: {book.pages}</p>
                <p>Published in {book.year}</p>
                <div className="button-section">
                  <EditIcon onClick={() => setEditBook(book)} />
                </div>
              </Paper>
            ))}
          </div>
          <Pagination />
        </div>
        <div className="right-section">
          <AddBook onAddToBookList={onAddToBookList} onEditBook={onEditBook} editBook={editBook} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
