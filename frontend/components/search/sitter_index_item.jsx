import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import SitterIndexContainer from './sitter_index_container';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {

    const { sittername, rates, description } = this.props.sitter;
    return (
      <div >
        <Link to={`sitters/${this.props.sitter.id}`} className="sitter-item-link">
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

        </Link>

      </div>
    );
  }
}

export default withRouter(IndexItem);
