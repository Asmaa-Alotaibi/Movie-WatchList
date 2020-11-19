import React from 'react'

const MovieItem = ({ movie, watchedButton, deleteMovie }) => {
  return (
    <div>
      <p>{movie.name}</p>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => watchedButton(movie)}>
        {movie.watched ? 'Unwatch' : 'Watch'}
      </button>
      <button
        style={{ marginLeft: '10px' }}
        type='button'
        className='btn btn-danger'
        onClick={() => deleteMovie(movie)}>
        Delete
      </button>
    </div>
  )
}
export default MovieItem
