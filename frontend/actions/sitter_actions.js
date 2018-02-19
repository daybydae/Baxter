import * as SitterApiUtil from '../util/sitter_api_util';

export const RECEIVE_ALL_SITTERS = "RECEIVE_ALL_SITTERS";
export const RECEIVE_SITTER = "RECEIVE_SITTER";
export const REMOVE_SITTER = "REMOVE_SITTER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const receiveSitters = (sitters) => {
  return {
    type: RECEIVE_ALL_SITTERS,
    sitters
  };
};

export const receiveSitter = sitter => {
  return {
    type: RECEIVE_SITTER,
    sitter
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const removeSitter = (sitterId) => {
  return {
    type: REMOVE_SITTER,
    sitterId
  };
};

export const fetchAllSitters = () => dispatch => {
  return SitterApiUtil.fetchAllSitters().then( sitters => dispatch(receiveSitters(sitters)), errors => dispatch(receiveErrors(errors)));
};

export const fetchSitters = (filters) => dispatch => {
  return SitterApiUtil.fetchSitters(filters).then( sitters => dispatch(receiveSitters(sitters)), errors => dispatch(receiveErrors(errors)));
};

export const fetchSitter = (sitterId) => dispatch => {
  return SitterApiUtil.fetchSitter(sitterId).then( sitter => dispatch(receiveSitter(sitter)), errors => dispatch(receiveErrors(errors)));
};

export const createSitter = sitter => dispatch => {
  return SitterApiUtil.createSitter(sitter).then( sitter => dispatch(receiveSitter(sitter)), errors => dispatch(receiveErrors(errors)));
};

export const deleteSitter = (sitterId) => dispatch => {
  return SitterApiUtil.deleteSitter(sitterId).then( () => dispatch(removeSitter(sitterId)), errors => dispatch(receiveErrors(errors)));
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};
