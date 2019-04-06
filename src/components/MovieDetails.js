import React from "react";
import { connect } from "react-redux";
import { getMovieDetails } from "../actionCreators/getMovieDetails";
import Header from './Header';


class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      showModal: false
    }
  }

  componentDidMount() {
    this.props.getMovieDetails(this.props.match.params.id);
  }


  render() {
    let movieDetails = this.props.movieDetails;
    let posterPath = "http://image.tmdb.org/t/p/w185/" + movieDetails.poster_path
    let releaseDate = movieDetails.release_date
    return (
      <div >
        <Header text="Movie Detail" />
        <div className="movieName"><p>{movieDetails.title}</p></div>
        <div className="details">
          <div className="movieDetailsAndInfo">
            <img className="movieDetailImage" src={posterPath}></img>
            <div className="movieInfo">
              <p>{releaseDate}</p>
              <p>{movieDetails.runtime} min</p>
              <p>{movieDetails.vote_average}/10</p>
              <button>MARK AS FAVORITE</button>
            </div>
          </div>
          <div className="movieDetailOverview">
            <p> {movieDetails.overview} </p>
          </div>
        </div>
      </ div >
    )
  }
}

const mapStateToProps = ({ movieDetails }) => ({
  movieDetails
});


// export default Results;
export default connect(
  mapStateToProps,
  { getMovieDetails }
)(MovieDetails);
