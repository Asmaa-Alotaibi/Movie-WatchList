import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <button>watched</button>
      <button>Delete</button>
    </div>
  );
};
export default MovieItem;
