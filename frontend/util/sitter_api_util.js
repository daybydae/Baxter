export const fetchAllSitters = () => {
  return $.ajax({
    method: 'get',
    url: 'api/sitters',
  });
};

export const fetchSitters = (filters) => {

  let bounds;
  if (filters) {
    bounds = filters.bounds;
  } else {
    bounds = {
      north: 40.792706,
      south: 40.780294,
      east: -73.937692,
      west : -73.985414
    };
  }

  return $.ajax({
    method: 'get',
    url: 'api/sitters',
    data: { bounds }
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
