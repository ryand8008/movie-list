import React from 'react';
import Search from './Search.jsx';
import MoviesList from './MovieList.jsx';
import Add from './Add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      addedMovie: []
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  // add 'add' event listener
  onAddClick(data) {
    // do something here
  }


  onSearchClick(title) {
      console.log('I am the parent, I have this title', title)
      var result = this.state.movies.filter(movie => movie.title === title)
      this.setState({movies: result});
  };

  render() {
    return (
      <div>
        <div className='title'> Movie List </div>
        <Add />
        <br></br>
        <Search onSearchClick={this.onSearchClick}/>

      <div>
        <MoviesList moviesList={this.state.movies} />
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



export default App;
