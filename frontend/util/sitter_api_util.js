
export const fetchSitters = (filters) => {
  let bounds;
  if (filters){
    bounds = filters.bounds;
  } else {
    bounds = {
      northEast: {lat: 40.873106, lng: -73.879454},
      southWest : {lat: 40.708831, lng: -74.031889}
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
