import { useState } from 'react'
import AddField from './components/AddField'
import WatchList from './components/WatchList'

function App() {
  const [addMovie, setAddMovie] = useState({
    name: '',
    watched: false,
  })

  const handleChange = (event) => {
    setAddMovie({ ...addMovie, name: event.target.value })
    console.log(addMovie)
  }
  return (
    <div>
      <AddField handleChange={handleChange} />
      <WatchList />
    </div>
  )
}

export default App
