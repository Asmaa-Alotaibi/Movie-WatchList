import React, { useState } from 'react'

const AddField = ({ handleChange }) => {
  const [input, setInput] = useState('')
  console.log('input', input)
  return (
    <div style={{ width: '30%', margin: '40px' }} className='container px-lg-5'>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Add movie...'
          aria-describedby='basic-addon2'
          onChange={(event) => setInput(event.target.value)}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-outline-secondary'
            type='button'
            onClick={() => handleChange(input)}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddField
