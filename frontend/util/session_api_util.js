import { receiveCurrentUser } from "../actions/session_actions";

export const signup = (formData) => {
  return $.ajax({
    method: 'post',
    url: 'api/user',
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
