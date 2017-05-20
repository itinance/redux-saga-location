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
import { locationReducer } from 'redux-saga-location';

const appReducer = combineReducers({
  appStates,
  routes,
  ...
  locationReducer
});
```

In the root saga spawn the channel watcher:

**saga.js**

```javascript
export default function * rootSaga() {
  yield [
    // ... all your sagas here
    spawn(watchLocationChannel),
  ];
}
```

# Usage


## Contribution:

Contributors are welcome! Feel free to submit pull requests or open [discussions](https://github.com/itinance/redux-saga-rn-alert/issues).
