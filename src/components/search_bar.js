import React, { Component } from 'react';
import { log } from 'util';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          onChange={event => this.setState({ term: event.target.value })} 
          value={this.state.term}
        />
        Value of the input: {this.state.term}
      </div>
    );
  }


}

export default SearchBar;