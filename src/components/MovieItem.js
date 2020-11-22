import React from "react";
import movieStore from "../stores/MovieStore";
import { observer } from "mobx-react";

const MovieItem = ({ movie, movieId, watchedButton, deleteMovie }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    movieStore.deleteMovie(movieId);
  };

  return (
    <div>
      <p>{movie.name}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => movieStore.watchedButton(movie)}
      >
        {movie.watched ? "Unwatch" : "Watch"}
      </button>
      <button
        style={{ marginLeft: "10px" }}
        type="button"
        className="btn btn-danger"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
export default observer(MovieItem);
