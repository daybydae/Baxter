import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import SitterIndexItem from '../search/sitter_index_item';
import SearchContainer from '../search/search_container';


class BookingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { sitter_id, user_id, start_date, end_date } = this.props.booking;
    const start = new Date(start_date);
    const end = new Date(end_date);
    const sitter = this.props.sitters[sitter_id-1];
    debugger
    return (
      <div className="index-booking">
        <Link to={`/sitters/${sitter_id}`}>
          <div className="booking-sitter">
            <div className="profile-icon-box-sitter">
              <div>
                <img className="profile-icon-circle" src={sitter.image_thumb}>
                </img>
              </div>
            </div>
            <div className="booking-sitter-name">
              {sitter.sittername}
            </div>
          </div>
        </Link>

        <div>{start.toDateString()}
        </div>
        <div>{end.toDateString()}
        </div>


      </div>
    );
  }
}

export default BookingShow;
