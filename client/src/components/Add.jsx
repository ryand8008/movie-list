import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      addedMovie: ''
    }
  }

  handleChange(e) {
    this.setState({addedMovie: e.target.value})
  }

  render() {
    return (
      <form id='add'>
        <input
          type='text'
          value={this.state.addedMovie}
          placeholder='Add movie...'
          onChange={this.handleChange}>
        </input>
        <button>Add</button>
        </form>
    )
  }
};

export default Add;