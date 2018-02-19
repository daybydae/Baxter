export const fetchBookings = (userId) => {
  debugger
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}/bookings`
  });
};

export const fetchBooking = (userId, bookingId) => {
  return $.ajax({
    method: 'get',
    url: `api/users/${userId}/bookings/${bookingId}`
  });
};

export const createBooking = (booking) => {
  debugger
  return $.ajax({
    method: 'post',
    url: `api/users/${booking.user_id}/bookings`,
    data: { booking }
  });
};

export const deleteBooking = (booking) => {
  return $.ajax({
    method: 'delete',
    url: `api/users/${booking.user_id}/bookings/${booking.id}`
  });
};
