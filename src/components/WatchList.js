import React, { useState } from 'react'
import movies from '../movies.js'
import AddField from './AddField.js'
import MovieItem from './MovieItem.js'

const WatchList = () => {
  const [_movies, setMovie] = useState(movies)

  const deleteMovie = (movie) => {
    const deletedList = _movies.filter((m) => m !== movie)
    setMovie(deletedList)
    console.log(_movies)
  }
  const watchedButton = (movie) => {
    setMovie(
      _movies.map((m) => {
        if (m === movie) m.watched = !m.watched
        return m
      })
    )
  }

  const watchList = _movies
    .filter((movie) => !movie.watched)
    .map((movie, index) => (
      <MovieItem
        movie={movie}
        key={index}
        watchedButton={watchedButton}
        deleteMovie={deleteMovie}
      />
    ))

  const watched = _movies
    .filter((movie) => movie.watched)
    .map((movie, index) => (
      <MovieItem
        movie={movie}
        key={index}
        watchedButton={watchedButton}
        deleteMovie={deleteMovie}
      />
    ))

  return (
    <div>
      <div>
        <AddField _movies={_movies} setMovie={setMovie} />
        <div className='container px-lg-5'>
          <div className='row'>
            Watchlist
            <span className='badge badge-Light  badge-pill'>
              {watchList.length}
            </span>
          </div>
          <div className='row'>
            <div className='col py-3 px-lg-5 border bg-light '>{watchList}</div>
          </div>
        </div>
        <div className='container px-lg-5'>
          <div className='row'>
            Watched{' '}
            <span className='badge badge-primery  badge-pill'>
              {' '}
              {watched.length}{' '}
            </span>
          </div>
          <div className='row'>
            <div className='col py-3 px-lg-5 border bg-light '>{watched}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchList
