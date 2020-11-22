import React from "react";
import AddField from "./AddField.js";
import SearchBar from "./SearchBar.js";
import movieStore from "../stores/MovieStore";
import { observer } from "mobx-react";
import { useState } from "react";
import MovieItem from "./MovieItem";

const WatchList = () => {
  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");

  const watchList = movieStore.watchList
    .filter((movie) => movie.name.includes(query1))
    .map((movie) => <MovieItem movie={movie} movieId={movie.id} />);

  const watched = movieStore.watched
    .filter((movie) => movie.name.includes(query2))
    .map((movie) => <MovieItem movie={movie} movieId={movie.id} />);

  return (
    <div>
      <div>
        <AddField _movies={movieStore.movies} /> {/* setMovie={setMovie} */}
        <div className="container px-lg-5">
          <div className="row">
            Watchlist
            <span className="badge badge-Light  badge-pill">
              {movieStore.watchList.length}
            </span>
            <SearchBar setQuery={setQuery1} />
          </div>
          <div className="row">
            <div className="col py-3 px-lg-5 border bg-light ">
              {watchList.length !== 0 ? watchList : "No Movie Found !"}
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="row">
            Watched{" "}
            <span className="badge badge-primery  badge-pill">
              {movieStore.watched.length}
            </span>
            <SearchBar setQuery={setQuery2} />
          </div>
          <div className="row">
            <div className="col py-3 px-lg-5 border bg-light ">
              {watched.length !== 0 ? watched : "No Movie Found !"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(WatchList);
