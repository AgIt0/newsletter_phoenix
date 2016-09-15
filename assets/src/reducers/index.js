import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import session from './session';
import registration from './registration';

export default combineReducers({
  registration: registration,
  routing: routeReducer,
  session: session
});
