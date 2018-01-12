import React from 'react';
import SitterIndexItem from './sitter_index_item';

class SitterIndex extends React.Component {

  render () {
    return (
      <div className="index">
        <ul className="">
          {
            this.props.sitters.map( sitter => {
              return (
                <li className="sitter-item-box">
                  <SitterIndexItem
                    key={sitter.id}
                    sitter={sitter}
                    />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default SitterIndex;
