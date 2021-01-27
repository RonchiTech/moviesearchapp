import * as actionTypes from '../actions/actionTypes';
const initialState = {
  hasResults: false,
  payload: {
    Search: [],
    Error: null
  }
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        hasResults: true,
      };
    case actionTypes.SEARCH_MOVIE_FAILED:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }
};

export default reducers;
