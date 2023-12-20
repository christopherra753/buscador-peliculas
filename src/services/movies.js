import { API_KEY } from '../config'

export const searchMovies = async ({ search }) => {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.json()
    const movies = data.Search

    return movies?.map(movie => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        img: movie.Poster
      }
    })
  } catch (error) {
    throw new Error('Error buscando las películas')
  }
}
