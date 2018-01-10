import React from 'react';

import SitterIndex from './sitter_index';
import SitterMap from './../sitter_map/sitter_map';

class Search extends React.Component {


  render() {
    return (
      <div>
        <SitterIndex
          sitters={this.props.sitters}
        />
        <SitterMap
          sitters={this.props.sitters}
          updateFilter={this.props.updateFilter}
        />
      </div>
    );
  }
}

export default Search;
