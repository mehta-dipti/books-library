import React, { useEffect, useState } from "react";
import { Button, Input, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./index.css";

const CustomizedTextField = styled(TextField)`
  width: 70%;
  margin-bottom: 20px;
`;

const AddBook = (props) => {
  const { onAddToBookList, onEditBook, editBook } = props;

  const [bookData, setBookData] = useState({});

  useEffect(() => {
    if (editBook) setBookData(editBook);
  }, [editBook]);

  const handleOnChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const onHandleButtonClick = () => {
    if (editBook) {
      onEditBook(bookData);
    } else onAddToBookList(bookData);

    setBookData("");
  };

  return (
    <div>
      <form className="form">
        <h2>{`${editBook ? "Edit" : "New"} Book Details`}</h2>
        <CustomizedTextField label="Title" name="title" variant="filled" onChange={handleOnChange} value={bookData ? bookData.title : ""} InputLabelProps={{ shrink: true }} />
        <CustomizedTextField label="Author" name="author" variant="filled" onChange={handleOnChange} value={bookData ? bookData.author : ""} InputLabelProps={{ shrink: true }} />
        <CustomizedTextField label="No. Pages" name="pages" variant="filled" onChange={handleOnChange} value={bookData ? bookData.pages : ""} InputLabelProps={{ shrink: true }} />
        <CustomizedTextField label="Published year" name="year" variant="filled" onChange={handleOnChange} value={bookData ? bookData.year : ""} InputLabelProps={{ shrink: true }} />
        <Button variant="contained" onClick={onHandleButtonClick}>
          {editBook ? "Edit Book Details" : "Add to Books List"}
        </Button>
      </form>
    </div>
  );
};

export default AddBook;
