import movies from "../movies.js";
import {
  makeAutoObservable,
  makeObservable,
  observable,
  action,
  computed,
} from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this, {
      // movies: observable,
      // watchList: computed,
      // watched: computed,
      // watchedButton: action,
      // createMovie: action,
      // deleteMovie: action,
    });
  }

  createMovie = (newItem) => {
    newItem.id = this.movies[this.movies.length - 1].id + 1; //generate id dynamicly
    this.movies.push(newItem);
  };

  deleteMovie = (movieId) => {
    this.movies = this.movies.filter((m) => m.id !== movieId);
  };
  watchedButton = (movie) => {
    this.movies.map((m) => {
      if (m === movie) m.watched = !m.watched;
      return m;
    });
  };

  get watchList() {
    return this.movies.filter((movie) => !movie.watched);
  }
  //
  get watched() {
    return this.movies.filter((movie) => movie.watched);
  }
}
const movieStore = new MovieStore();
export default movieStore;
