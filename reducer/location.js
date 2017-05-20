import {ACTION_SET_POSITION, ACTION_SET_ERROR} from '../actions';

export default function locationReducer(state = {
    position: null,
    error: null,
}, action) {
  switch(action.type) {

    case ACTION_SET_POSITION: {
      const {position} = action;

      return {
        ...state,
        position,
        error: null,
      }
    }

    case ACTION_SET_ERROR : {
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
