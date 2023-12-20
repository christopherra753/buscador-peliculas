import { useEffect } from 'react'
import { Movie } from './components/Movie'
import { useDebounce } from './hooks/useDebounce'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

export function App () {
  const { movies, getMovies, loading } = useMovies()
  const { error, search, setSearch } = useSearch()
  const { debounceValue } = useDebounce(search, 500)

  const handleChange = async (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
  }

  useEffect(() => {
    getMovies({ search: debounceValue })
  }, [debounceValue])

  const handleSubmit = async (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  return (
    <div className='min-h-screen bg-[#242424] text-white p-10'>
      <header className='text-center mb-5'>
        <h1 className='text-4xl mb-2'>Buscar Películas</h1>
        <form onSubmit={handleSubmit} className='flex justify-center gap-2'>
          <input onChange={handleChange} value={search} className='outline-none rounded-lg px-4 py-2 bg-transparent border' type='text' placeholder='Buscar' />
          <button className='bg-indigo-500 px-4 py-2 rounded-lg'>Buscar</button>
        </form>
        {error && <span className='text-red-400 text-sm'>{error}</span>}
      </header>

      <main className='max-w-5xl mx-auto'>
        {loading ? <p className='text-center text-gray-500 text-3xl'>Cargando...</p> : <Movie movies={movies} />}
      </main>
    </div>
  )
}
