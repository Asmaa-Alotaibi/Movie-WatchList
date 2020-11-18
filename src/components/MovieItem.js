import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <button type="button" class="btn btn-primary">
        watched
      </button>
      <a> </a>
      <button type="button" class="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
export default MovieItem;
