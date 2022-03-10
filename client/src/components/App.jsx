import React from 'react';
import Search from './Search.jsx';
import MoviesList from './MovieList.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies
    };
    this.onSearchClick = this.onSearchClick.bind(this);
  }

  onSearchClick() {

      alert('testing');
  };

  render() {
    return (
      <div>
        <div className='title'> Movie List </div>
        <Search moviesList={this.state.movies}/>
      <div>
        <MoviesList moviesList={this.state.movies}/>
      </div>
      </div>
    );
  }
}



var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Batman'}
];


// const MoviesList = (props) => {
//   return (
//   <div>
//     {props.moviesList.map(movie =>
//     <MoviesListItem movie={movie.title} />)}
//   </div>
//   )
// };


// class MoviesListItem extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>{this.props.movie}</div>
//     )
//   }
// }

export default App;
