import React from 'react';
import BookingShow from './booking_show';

class BookingsShow extends React.Component {
  componentDidMount() {
    this.props.fetchBookings(this.props.match.params.userId)
    this.props.fetchAllSitters();
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
                    <BookingShow
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
