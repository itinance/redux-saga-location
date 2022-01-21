import {
  REDUX_SAGA_LOCATION_ACTION_REQUEST,
  REDUX_SAGA_LOCATION_ACTION_SET_ERROR,
  REDUX_SAGA_LOCATION_ACTION_SET_POSITION,
  REDUX_SAGA_LOCATION_CLEAR_REQUEST,
  REDUX_SAGA_LOCATION_STOP_REQUEST
} from '../actions';

export default function locationReducer(state = {
    position: null,
    error: null,
    fetching: false
}, action) {
  switch(action.type) {

    case REDUX_SAGA_LOCATION_ACTION_REQUEST: {
      return {
        ...state,
        fetching: true
      }
    }

    case REDUX_SAGA_LOCATION_ACTION_SET_POSITION: {
      const {position} = action;

      return {
        ...state,
        position,
        error: null,
        fetching: false
      }
    }

    case REDUX_SAGA_LOCATION_ACTION_SET_ERROR: {
      const {error} = action;

      return {
        ...state,
        error: error,
        fetching: false
      }
    }

    case REDUX_SAGA_LOCATION_CLEAR_REQUEST: {
      return {
        ...state,
        fetching: false
      }
    }

    case REDUX_SAGA_LOCATION_STOP_REQUEST: {
      return {
        ...state,
        fetching: false
      }
    }


    default: {
      return state;
    }
  }
}
