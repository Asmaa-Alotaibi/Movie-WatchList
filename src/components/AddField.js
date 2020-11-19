import React, { useState } from 'react'

const AddField = ({ _movies, setMovie }) => {
  //initial movie
  const [movieAdded, setMovieAdded] = useState({
    name: '',
    watched: false,
  })

  //from input
  const handleChange = (event) => {
    setMovieAdded({ ...movieAdded, [event.target.name]: event.target.value })
  }

  // handle submit
  const handleSubmit = () => {
    setMovie([..._movies, movieAdded])
  }
  return (
    <div style={{ width: '30%', margin: '40px' }} className='container px-lg-5'>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Add movie...'
          name='name'
          aria-describedby='basic-addon2'
          onChange={handleChange}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary'
            type='button'
            onClick={handleSubmit}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddField
