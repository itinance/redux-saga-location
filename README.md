# redux-saga-location

GeoLocation within 'redux-saga'-context.

This library helps along to fetch geo-location within a saga (or any other generator function) and put the result into the redux-store.

# Installation

```bash
yarn add redux-saga-location @react-native-community/geolocation
```

or

```bash
npm install redux-saga-location @react-native-community/geolocation --save
```

# Setup

In the root reducer add the location-reducer. For instance:

**reducer.js:**

```javascript
import { locationReducer as location } from "redux-saga-location";

const appReducer = combineReducers({
  appStates,
  routes,
  ...location
});
```

In the root saga spawn the channel watcher:

**saga.js**

```javascript
import {
  watchLocationChannel,
  getCurrentPosition,
  watchCurrentPosition
} from "redux-saga-location";

export default function* rootSaga() {
  yield [
    // ... all your sagas here
    spawn(watchLocationChannel)
  ];
}
```

# Usage

## Usage of getCurrentPosition

We call `getCurrentPosition` according to the [web-standard-method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) and (if user permits) the current position will be put into the redux store.

```javascript
yield call(getCurrentPosition)
```

The received data is the same as from [navigator.geolocation.getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition).
Starting with react-native 0.60 navigator.geolocation has been removed and moved to [Geolocation.getCurrentPosition](https://github.com/react-native-community/react-native-geolocation)

## Usage of watchCurrentPosition

We call `watchCurrentPosition` according to the [web-standard-method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition) and (if user permits) the position will be put into the redux store as often as it gets updated.

```javascript
yield call(watchCurrentPosition)
```

The received data is the same as from [navigator.geolocation.watchPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition).
Starting with react-native 0.60 navigator.geolocation has been removed and moved to [Geolocation.watchPosition](https://github.com/react-native-community/react-native-geolocation)

We can listen to the event in our reducers per "REDUX_SAGA_LOCATION_SET_POSITION", while errors can be detected with "REDUX_SAGA_LOCATION_SET_ERROR".

If we want to use constants for the actions, we can import them with:

```javascript
import {
  REDUX_SAGA_LOCATION_ACTION_SET_POSITION,
  REDUX_SAGA_LOCATION_ACTION_SET_ERROR
} from "redux-saga-location/actions";
```

We'll find the result in our redux-store like this:

![alt text](https://github.com/itinance/redux-saga-location/blob/master/instructions/redux-saga-location.png?raw=true)

## Contribution:

Contributors are welcome! Feel free to submit pull requests or open [discussions](https://github.com/itinance/redux-saga-location/issues).
