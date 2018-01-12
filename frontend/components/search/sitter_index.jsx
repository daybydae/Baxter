import React from 'react';
import SitterIndexItem from './sitter_index_item';

class SitterIndex extends React.Component {

  render () {
    return (
      <div className="index">
        <ul className="">
          {
            this.props.sitters.map( (sitter, idx) => {
              return (
                <li className="sitter-item-box" key={idx}>
                  <SitterIndexItem
                    key={sitter.id}
                    sitter={sitter}
                    num={idx}
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
