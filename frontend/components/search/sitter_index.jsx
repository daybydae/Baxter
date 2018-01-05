import React from 'react';
import SitterIndexItem from './sitter_index_item';

class SitterIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSitters();
  }

  render () {
    return (
      <div>
        <h1>Sitters: </h1>
        <ul>
          {
            Object.values(this.props.sitters).map( sitter => {
              return (
                <SitterIndexItem
                  key={sitter.id}
                  sitter={sitter}
                  />
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default SitterIndex;
