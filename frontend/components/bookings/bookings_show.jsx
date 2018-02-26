import React from 'react';
import BookingShow from './booking_show';
import BookingShowContainer from './booking_show_container';

class BookingsShow extends React.Component {
  componentDidMount() {

    this.props.fetchAllSitters().then( () => {
      this.props.fetchBookings(this.props.match.params.userId);
    });

  }

  render () {
    if (Object.keys(this.props.bookings).length !== 0) {
      return (
        <div className="index">
          <ul className="">
            {
              this.props.bookings.map( (booking) => {
                return (
                  <li className="booking-item-box" key={booking.id}>
                    <BookingShowContainer
                      key={booking.id}
                      booking={booking}
                      />
                  </li>
                );
              })
            }
          </ul>
        </div>
      );

    } else {
      return (
        <div>
          <div>
            NO BOOKINGS
          </div>
        </div>
      );
    }
  }
}

export default BookingsShow;
