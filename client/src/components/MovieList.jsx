import React from 'react'

var MoviesList = (props) => {
  return (
  <div>
    {props.moviesList.map(movie =>
    <MoviesListItem movie={movie.title} key={movie.title} />)}
  </div>
  )
};

class MoviesListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>{this.props.movie}</div>
    )
  }
}

export default MoviesList;