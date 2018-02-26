import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SitterIndexItem from '../search/sitter_index_item';


class BookingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { sitter_id, user_id, start_date, end_date } = this.props.booking;
    const sitter = this.props.sitters[sitter_id-1];
    return (
      <div>
        <div>{sitter.sittername}
        </div>
        <div>{start_date}
        </div>
        <div>{end_date}
        </div>
        <SitterIndexItem
          key={sitter.sitter_id}
          sitter={sitter}
          num={this.props.num}
        />

      </div>
    );
  }
}

export default BookingShow;
