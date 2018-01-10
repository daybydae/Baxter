import React from 'react';

import SitterIndex from './sitter_index';
import SitterMap from './../sitter_map/sitter_map';

class Search extends React.Component {
  componentDidMount() {

    this.props.fetchSitters();
  }


  render() {

    return (
      <div>
        <SitterIndex
          sitters={this.props.sitters}
        />
        <SitterMap
          sitters={this.props.sitters}
          updateBounds={this.props.updateBounds}
        />
      </div>
    );
  }
}

export default Search;
