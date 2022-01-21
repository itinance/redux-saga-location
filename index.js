/**
 * redux-saga-location
 * @flow
 */

'use strict';

export {
  clearWatch,
  getCurrentPosition,
  stopObserving,
  watchCurrentPosition,
  watchLocationChannel
} from './saga/location';
export {
  clearWatchThunk,
  getCurrentPositionThunk,
  stopObservingThunk,
  watchCurrentPositionThunk
} from './thunks/location'

export {
  default as locationReducer
} from './reducer/location';
