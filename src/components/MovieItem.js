import React from "react";

const MovieItem = ({ movie, watchedButton, deleteMovie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => watchedButton(movie)}
      >
        {movie.watched ? "Watch" : "Unwatch"}
      </button>
      <a> </a>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => deleteMovie(movie)}
      >
        Delete
      </button>
    </div>
  );
};
export default MovieItem;
