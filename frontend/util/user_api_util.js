
export const updateUser = (user) => {
  return $.ajax({
    method: 'patch',
    url: `api/user/${userId}`,
    data: { user }
  });
};
