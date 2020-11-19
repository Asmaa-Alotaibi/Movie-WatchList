import React from "react";

const SearchBar = ({ setQuery }) => (
  <input
    placeholder="Search for a Movie name"
    onChange={(event) => setQuery(event.target.value)}
  />
);

export default SearchBar;
