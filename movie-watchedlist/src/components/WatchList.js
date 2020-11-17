import React from "react";
import movies from "../movies.js";
import MovieItem from "./MovieItem.js";

const WatchList = () => {
  const movieslist = movies.map((movie, index) => (
    <MovieItem movie={movie} key={index} />
  ));

  return <div> {movieslist}</div>;
};

export default WatchList;
