import { useEffect, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('No puedes buscar una pelicula vacia')
      return
    }
    if (search.length < 3) {
      setError('Minimo de busqueda es de 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  useEffect(() => {

  }, [search])

  return { search, setSearch, error }
}
