import React from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/SearchBar.css"; 

function SearchBar() {
  return (
    <div className="navbar">
      <div className="search-bar">
        <Paper className="search-bar-container" component="form">
          <InputBase
            className="input-base"
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton className="icon-button" type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
    </div>
  );
}

export default SearchBar;
