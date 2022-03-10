import React from 'react';


class Search extends React.Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.onSearchClick = this.onSearchClick.bind(this)
    this.state = {
        movies: this.onSearchClick
  }
}

  onSearchClick(e){
    e.preventDefault();
    this.setState({movies: e.target.value})
    alert(this.state.movies)

  }

  handleChange(e) {
    this.setState({movies: e.target.value})
  }


  render() {
    return (
      <div className='search-bar'>
      <form id='form'>
      <input
        type='text'
        value={this.state.movies}
        placeholder='Search...'
        onChange={this.handleChange}>
        </input>
        <button onClick={this.onSearchClick.bind(this)}>Search</button>
        </form>
        </div>
    );
  };
};

export default Search;