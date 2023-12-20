export const Movie = ({ movies }) => {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies />

  )
}

const ListOfMovies = ({ movies }) => {
  return (
    <ul className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {
        movies.map(movie => (
          <li className='flex flex-col mx-auto text-center' key={movie.id}>
            <h2 className='text-2xl text-indigo-400 font-semibold'>{movie.title}</h2>
            <p className='text-gray-400 font-semibold text-lg'>{movie.year}</p>
            <img className='flex-1 object-cover' src={movie.img} />
          </li>
        ))
      }
    </ul>
  )
}

const NoMovies = () => {
  return (<p className='text-center text-gray-500 text-3xl'>No hay peliculas</p>)
}
