/**
 * redux-saga-location
 * @flow
 */

'use strict';

export { watchLocationChannel, getCurrentPosition, watchCurrentPosition } from './saga/location';
export { default as locationReducer } from './reducer/location';
export {getCurrentPositionThunk, watchCurrentPositionThunk} from './thunks/location'