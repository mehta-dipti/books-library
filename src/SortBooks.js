import React, { useState } from "react";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "./store/bookSlice";

const SortBooks = () => {
  const [sortBy, setSortBy] = useState("ASC");

  const dispatch = useDispatch();
  const pages = useSelector((state) => {
    return state.books.pages;
  });

  const handleChange = (event) => {
    setSortBy(event.target.value);
    dispatch(setPages({ ...pages, sortDirection: event.target.value }));
  };

  return (
    <FormControl variant="filled" sx={{ minWidth: 120 }}>
      <InputLabel>Sort By</InputLabel>
      <Select value={sortBy} onChange={handleChange}>
        <MenuItem value="ASC">Asc</MenuItem>
        <MenuItem value="DESC">Desc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortBooks;
