import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortBooks from "./SortBooks";
import FilterBooks from "./FilterBooks";

const SearchBar = ({ handleOnSearch }) => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className="search-container">
      <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }} className="search-bar">
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search books by title " onChange={handleOnSearch} />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton sx={{ p: "10px" }}>
          <FilterAltIcon onClick={() => setOpenDialog(!openDialog)} />
        </IconButton>
      </Paper>
      <FilterBooks setOpenDialog={setOpenDialog} openDialog={openDialog} />

      <SortBooks />
    </div>
  );
};

export default SearchBar;
