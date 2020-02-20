import Geolocation from "@react-native-community/geolocation";
import {
  REDUX_SAGA_LOCATION_ACTION_REQUEST,
  REDUX_SAGA_LOCATION_ACTION_SET_POSITION,
  REDUX_SAGA_LOCATION_ACTION_SET_ERROR
} from "../actions";

export const getCurrentPositionThunk = options => dispatch => {
  dispatch({ type: REDUX_SAGA_LOCATION_ACTION_REQUEST });
  Geolocation.getCurrentPosition(
    position => {
      dispatch({ type: REDUX_SAGA_LOCATION_ACTION_SET_POSITION, position });
    },
    error => dispatch({ type: REDUX_SAGA_LOCATION_ACTION_SET_ERROR, error }),
    options
  );
};

export const watchCurrentPositionThunk = options => dispatch => {
  dispatch({ type: REDUX_SAGA_LOCATION_ACTION_REQUEST });
  Geolocation.watchPosition(
    position => {
      dispatch({ type: REDUX_SAGA_LOCATION_ACTION_SET_POSITION, position });
    },
    error => dispatch({ type: REDUX_SAGA_LOCATION_ACTION_SET_ERROR, error }),
    options
  );
};
