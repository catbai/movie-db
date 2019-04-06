import themoviedb from "../themoviedb";

themoviedb.common.api_key = process.env.REACT_APP_API_KEY;

export const getMovieDetails = (id) => dispatch => themoviedb.movies.getById(
  { "id": id },
  (movie) => {
    dispatch({ type: 'SET_MOVIE_DETAILS', payload: JSON.parse(movie) })
  },
  (error) => {

  }
)
