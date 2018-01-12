
export const signup = (formData) => {
  return $.ajax({
    method: 'post',
    url: 'api/users',
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,

  });
};

export const login = (user) => {
  return $.ajax({
    method: 'post',
    url: 'api/session',
    data: { user }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: 'api/session'
  });
};
