import React, { useState } from 'react'
import movies from '../movies.js'
import MovieItem from './MovieItem.js'

const WatchList = () => {
  const [_movies, setMovie] = useState(movies)
  const watchedButton = (movie) => {
    setMovie(
      movies.map((m) => {
        if (m === movie) m.watched = !m.watched
        return m
      })
    )
  }
  console.log(_movies)

  //
  const watchList = _movies
    .filter((movie) => movie.watched)
    .map((movie, index) => (
      <MovieItem movie={movie} key={index} watchedButton={watchedButton} />
    ))

  const watched = _movies
    .filter((movie) => !movie.watched)
    .map((movie, index) => (
      <MovieItem movie={movie} key={index} watchedButton={watchedButton} />
    ))

  return (
    <div>
      <div>
        <div> Here the addbar! </div>
        <div className='container px-lg-5'>
          <div className='row'>Watchlist </div>
          <div className='row'>
            <div className='col py-3 px-lg-5 border bg-light '>{watchList}</div>
          </div>
        </div>
        <div className='container px-lg-5'>
          <div className='row'>Watched </div>
          <div className='row'>
            <div className='col py-3 px-lg-5 border bg-light '>{watched}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchList
