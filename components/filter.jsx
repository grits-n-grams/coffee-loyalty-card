import { useState } from 'react'
import useSWR from 'swr'

export default function SearchBar() {
  const [filter, setFilter] = useState()
  const resetInputs = () => {
    setTimeout(() => {
      setSearch('')
    }, 1000)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const body = { filter }
      await fetch('api/filter', {
        method: 'READ',
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.log(error)
    }
  }
  const fetcher = (url) => fetch(url).then((res) => res.json())

  const { data, error } = useSWR('/api/filter', fetcher, {
    refreshInterval: 1000,
  })
  return (
  <div>
    <form action="submit" onSubmit={submitHandler}>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value)
          }}
          placeholder="Search"
        />
    </form>
    <h1>{data}</h1>
  </div>)
}