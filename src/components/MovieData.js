import React from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { getMovieData } from "../actionCreators/getMovieData";
import Header from "./Header";

class MovieData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [], //state of the 'world'
    }
  }

  componentDidMount() {
    this.props.getMovieData();
  }

  render() {
    return (
      <div>
        <Header text="Popular Movies" />
        <div className="movies">
          {
            this.props.movieData.map(movie => {
              let posterPath = "http://image.tmdb.org/t/p/w185/" + movie.poster_path;

              return < Movie
                key={movie.id + "i"}
                name={movie.original_title}
                media={posterPath}
                rating={movie.vote_average}
                description={movie.overview}
                id={movie.id} />
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movieData }) => ({
  movieData
});


// export default Results;
export default connect(
  mapStateToProps,
  { getMovieData }
)(MovieData);