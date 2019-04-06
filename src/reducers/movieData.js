export default function movieDataReducer(state = [], action) {
  switch (action.type) {
    case 'SET_MOVIE_DATA':
      if (action.payload) {
        return action.payload.results
      } else {
        return []
      }
    default:
      return state;
  }
}
