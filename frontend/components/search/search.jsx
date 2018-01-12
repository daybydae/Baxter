import React from 'react';

import SitterIndex from './sitter_index';
import SitterMap from './../sitter_map/sitter_map';
import BookingFormContainer from '../bookings/booking_form_container';
class Search extends React.Component {


  render() {
    return (
      <div className="container-search">
        <div className="search-container">

          <div className="left-column column">
            <BookingFormContainer />
          </div>

          <div className="middle-column column">
            <div className="margin-top-25">
            </div>
            <SitterIndex
              className="search"
              sitters={this.props.sitters}
              />
          </div>
          <div className="right-column column">
            <div className="margin-top-25">
            </div>
            <SitterMap
              className="search"
              sitters={this.props.sitters}
              updateFilter={this.props.updateFilter}
            />

          </div>

        </div>
      </div>
    );
  }
}

export default Search;
