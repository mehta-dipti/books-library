import React, { useState, useEffect } from "react";
import { Dialog, TextField, Button } from "@mui/material";
import { setFilters } from "./store/bookSlice";
import { useDispatch, useSelector } from "react-redux";

const FilterBooks = ({ openDialog, setOpenDialog }) => {
  const [filterData, setFilterData] = useState({});

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.books.filters);

  useEffect(() => {
    setFilterData(filters);
  }, [filters, openDialog]);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const onHandleFilterButtonClick = () => {
    dispatch(setFilters(filterData));
    setOpenDialog(false);
  };

  const onFilterChange = (e) => {
    const newFilters = { ...filterData, [e.target.name]: e.target.value };
    setFilterData(newFilters);
  };

  const onClearFilter = () => {
    setFilterData(null);
    dispatch(setFilters(null));
    setOpenDialog(false);
  };

  return (
    <Dialog onClose={handleClose} open={openDialog} className="filter-books">
      <div className="filter-data-wrapper">
        <h2>Filter By</h2>
        <TextField value={filterData?.title} label="Title" name="title" variant="filled" onChange={onFilterChange} InputLabelProps={{ shrink: true }} sx={{ m: 1 }}></TextField>
        <TextField value={filterData?.author} label="Auhtor" name="author" variant="filled" onChange={onFilterChange} InputLabelProps={{ shrink: true }} sx={{ m: 1 }}></TextField>
        <TextField value={filterData?.year} label="Year" name="year" variant="filled" onChange={onFilterChange} InputLabelProps={{ shrink: true }} sx={{ m: 1 }}></TextField>
        <Button variant="contained" onClick={onHandleFilterButtonClick} sx={{ width: "70%", m: 1 }}>
          Add filter
        </Button>
        <Button variant="outlined" onClick={onClearFilter} sx={{ width: "70%" }}>
          Clear filter
        </Button>
      </div>
    </Dialog>
  );
};

export default FilterBooks;
