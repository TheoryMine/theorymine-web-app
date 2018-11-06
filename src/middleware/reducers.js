import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import storage from 'redux-persist/lib/storage';
import { errorsReducer } from "../common/requests/errorsReducer"

const config = {
  key: 'primary',
  storage
};

const reducers = combineReducers({
    routing: routerReducer,
    error: errorsReducer,
  }
);

export default reducers;
