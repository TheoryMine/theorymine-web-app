import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import storage from 'redux-persist/lib/storage';
import { errorsReducer } from "../common/requests/errorsReducer"
import { formsReducer } from "../common/forms/formsReducer"

const config = {
  key: 'primary',
  storage
};

const reducers = combineReducers({
    routing: routerReducer,
    error: errorsReducer,
    forms: formsReducer
  }
);

export default reducers;
