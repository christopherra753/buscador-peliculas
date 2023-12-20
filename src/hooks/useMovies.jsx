import { useCallback, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previousInput = useRef('')

  const getMovies = useCallback(async ({ search }) => {
    if (previousInput.current === search) return
    try {
      setLoading(true)
      previousInput.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovies, loading }
}
