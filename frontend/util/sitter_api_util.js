
export const fetchSitters = () => {
  return $.ajax({
    method: 'get',
    url: 'api/sitters'
  });
};

export const fetchSitter = (sitterId) => {
  return $.ajax({
    method: 'get',
    url: `api/sitters/${sitterId}`
  });
};

export const createSitter = (sitter) => {
  return $.ajax({
    method: 'post',
    url: 'api/sitters',
    data: { sitter }
  });
};

export const deleteSitter = (sitterId) => {
  return $.ajax({
    method: 'delete',
    url: `api/sitters/${sitterId}`
  });
};
