import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import ShipmentReducer from './Reducers/ShipmentReducer';
import SettingsReducer from './Reducers/SettingsReducer';

const rootReducer = combineReducers({
  shipment: ShipmentReducer,
  settings: SettingsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
