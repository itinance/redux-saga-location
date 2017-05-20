(WIP!!! - Work in progress )

# redux-saga-location

# Installation

```bash
yarn add redux-saga-location
```
or
```bash
npm install redux-saga-location --save
```

# Setup

In the root reducer add the location-reducer. For instance:

**reducer.js:**

```javascript
import { locationReducer as location } from 'redux-saga-location';

const appReducer = combineReducers({
  appStates,
  routes,
  ...
  location
});
```

In the root saga spawn the channel watcher:

**saga.js**

```javascript

import {watchLocationChannel, getCurrentPosition} from 'redux-saga-location';

export default function * rootSaga() {
  yield [
    // ... all your sagas here
    spawn(watchLocationChannel),
  ];
}
```

# Usage

We call `getCurrentPositio` according to the [web-standard-method](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition) and (if user permits) the current position will be put into the redux store.

```javascript
yield call(getCurrentPosition)
```

The received data is the same as from [navigator.geolocation.getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition).
We'll find the result in our redux-store like this:


![alt text](https://github.com/itinance/redux-saga-location/blob/master/instructions/redux-saga-location.png?raw=true)

## Contribution:

Contributors are welcome! Feel free to submit pull requests or open [discussions](https://github.com/itinance/redux-saga-rn-alert/issues).
