
export const updateUser = (user) => {
  return $.ajax({
    method: 'patch',
    url: `api/users/${userId}`,
    data: { user }
  });
};
