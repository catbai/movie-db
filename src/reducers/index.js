import { combineReducers } from "redux";
import movieData from "./movieData";
import movieDetails from "./movieDetails";

export default combineReducers({
  movieData,
  movieDetails
})