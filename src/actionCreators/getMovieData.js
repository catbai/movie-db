import themoviedb from "../themoviedb";

themoviedb.common.api_key = process.env.REACT_APP_API_KEY;

export const getMovieData = () => dispatch => themoviedb.movies.getPopular(
  {},
  (movieData) => {
    dispatch({ type: 'SET_MOVIE_DATA', payload: JSON.parse(movieData) })
  },
  (error) => {

  }
)
