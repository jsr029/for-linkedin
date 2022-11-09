import { routerReducer } from 'react-router-redux';
import { withReduxStateSync } from 'redux-state-sync';
import { combineReducers } from "redux";
import pfReducer from './PfReducer';
import cvReducer from './cvReducer';

const allReducers = combineReducers({
  pfReducer,
  cvReducer,
  routerReducer: routerReducer
})
const rootReducer = (state, action) => {
  return allReducers(state, action);
};

//export default rootReducer;
export default withReduxStateSync(rootReducer);
//export default allReducers