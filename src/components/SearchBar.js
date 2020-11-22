import React from "react";
import { observer } from "mobx-react";

const SearchBar = ({ setQuery }) => (
  <input
    placeholder="Search for a Movie name"
    onChange={(event) => setQuery(event.target.value)}
  />
);

export default observer(SearchBar);
