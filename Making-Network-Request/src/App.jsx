import { useState } from 'react'
import DataDisplay from './components/DataDisplay'

function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchData(){
    setIsLoading(true)
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      setData(data)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <DataDisplay data={data}/>
      {error && <p>Error: {error}</p>}
      <button onClick={fetchData} disabled ={isLoading}>{isLoading ? 'Loading...' : 'Fetch Data'}</button>
    </>
  )
}

export default App
