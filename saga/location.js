import { channel } from "redux-saga";
import { take, put, call } from "redux-saga/effects";
import Geolocation from "@react-native-community/geolocation";

export const locationChannel = channel();

import {
  REDUX_SAGA_LOCATION_ACTION_REQUEST,
  REDUX_SAGA_LOCATION_ACTION_SET_ERROR,
  REDUX_SAGA_LOCATION_ACTION_SET_POSITION,
  REDUX_SAGA_LOCATION_CLEAR_REQUEST,
  REDUX_SAGA_LOCATION_STOP_REQUEST
} from "../actions";

export function* clearWatch(watchId) {
  locationChannel.put({ type: REDUX_SAGA_LOCATION_CLEAR_REQUEST });
  Geolocation.clearWatch(watchId);
}

export function* getCurrentPosition(options) {
  locationChannel.put({ type: REDUX_SAGA_LOCATION_ACTION_REQUEST });
  Geolocation.getCurrentPosition(
    position => {
      locationChannel.put({
        type: REDUX_SAGA_LOCATION_ACTION_SET_POSITION,
        position
      });
    },
    error =>
      locationChannel.put({
        type: REDUX_SAGA_LOCATION_ACTION_SET_ERROR,
        error
      }),
    options
  );
}

export function* stopObserving() {
  locationChannel.put({ type: REDUX_SAGA_LOCATION_STOP_REQUEST });
  Geolocation.stopObserving();
}

export function* watchCurrentPosition(options) {
  locationChannel.put({ type: REDUX_SAGA_LOCATION_ACTION_REQUEST });
  Geolocation.watchPosition(
    position => {
      locationChannel.put({
        type: REDUX_SAGA_LOCATION_ACTION_SET_POSITION,
        position
      });
    },
    error =>
      locationChannel.put({
        type: REDUX_SAGA_LOCATION_ACTION_SET_ERROR,
        error
      }),
    options
  );
}

export function* watchLocationChannel() {
  while (true) {
    const action = yield take(locationChannel);
    yield put(action);
  }
}
