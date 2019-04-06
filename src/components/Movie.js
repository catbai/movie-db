import React from "react";
import { Link } from "react-router-dom";

class Movie extends React.Component {
  render() {
    const { id, name, media} = this.props;
    return (
      <Link to={`/details/${id}`}>
        <img src={media} alt={name} />
      </Link >
    )
  }
}

export default Movie;
