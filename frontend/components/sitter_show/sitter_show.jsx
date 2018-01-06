import React from 'react';
import { Link } from 'react-router-dom';
import SitterDetail from './sitter_detail';

class SitterShow extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchSitter(this.props.match.params.sitterId);
  }



  render () {
    return (
      <div className="single-sitter-show">
        <div className="sitter-details">

          <SitterDetail
            sitter={this.props.sitter}
          />

        </div>

      </div>
    );
  }
}

export default SitterShow;
