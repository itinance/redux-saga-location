import {REDUX_SAGA_LOCATION_ACTION_SET_POSITION
  , REDUX_SAGA_LOCATION_ACTION_SET_ERROR} from '../actions';

export default function locationReducer(state = {
    position: null,
    error: null,
}, action) {
  switch(action.type) {

    case REDUX_SAGA_LOCATION_ACTION_SET_POSITION: {
      const {position} = action;

      return {
        ...state,
        position,
        error: null,
      }
    }

    case REDUX_SAGA_LOCATION_ACTION_SET_ERROR : {
      const {error} = action;

      return {
        ...state,
        error: error,
      }
    }

    default: {
      return state;
    }
  }
}
