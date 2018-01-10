import React from 'react';
import SitterIndexItem from './sitter_index_item';

class SitterIndex extends React.Component {

  render () {
    return (
      <div className="index">
        <h1>Sitters: </h1>
        <ul>
          {
            this.props.sitters.map( sitter => {
              return (
                <SitterIndexItem
                  key={sitter.id}
                  sitter={sitter}
                  />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default SitterIndex;
