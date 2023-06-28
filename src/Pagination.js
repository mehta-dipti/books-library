import React from "react";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "./store/bookSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const pages = useSelector((state) => {
    return state.books.pages;
  });

  const handleChangePage = (event, newPage) => {
    console.log(event, newPage);
    dispatch(setPages({ ...pages, currentPage: newPage }));
  };

  return (
    <div className="pagination">
      <Pagination sx={{ color: "#2a2d6e" }} count={pages.totalPages} page={pages.currentPage} onChange={handleChangePage} />
    </div>
  );
};

export default Footer;
