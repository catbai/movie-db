export default function movieDetailsReducer(state = [], action) {
  if (action.type === 'SET_MOVIE_DETAILS') {
    return action.payload;
  } else {
    return state;
  }
}