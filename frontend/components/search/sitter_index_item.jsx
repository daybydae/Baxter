import React from 'react';
import { withRouter } from 'react-router-dom';

import SitterIndexContainer from './sitter_index_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   this.props.history.push(`/sitters/${this.props.sitter.id}`)
  // }

  render () {
    const { sittername, rates, description } = this.props.sitter;
    debugger
    return (
      <div className="sitter-item-index">
        <div className="index-item-info">
          <span className="index-item-category">Name</span>
            <span className="index-item-value">
              { sittername }
            </span>
          <span className="index-item-category">Rates</span>
            <span className="index-item-value">
              { rates }
            </span>
          <span className="index-item-category">Description</span>
            <span className="index-item-value">
              { description || ""}
            </span>
        </div>

      </div>
    );
  }
}

export default withRouter(IndexItem);
