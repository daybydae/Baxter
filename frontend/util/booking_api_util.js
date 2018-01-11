export const fetchBookings = () => {
  return $.ajax({
    method: 'get',
    url: 'api/bookings'
  });
};

export const fetchBooking = (bookingId) => {
  return $.ajax({
    method: 'get',
    url: `api/bookings/${bookingId}`
  });
};

export const createBooking = (booking) => {
  return $.ajax({
    method: 'post',
    url: `api/sitters/${booking.sitter_id}/bookings`,
    data: { booking }
  });
};

export const deleteBooking = (booking) => {
  return $.ajax({
    method: 'delete',
    url: `api/bookings/${bookingId}`
  });
};
