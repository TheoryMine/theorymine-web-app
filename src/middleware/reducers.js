import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { formsReducer } from "../common/forms/formsReducer"
import { sessionReducer } from "../pages/Session/sessionReducer"
import { rehidrationReducer } from "../common/utils/rehidrtionReducer"

const config = {
  key: 'primary',
  storage,
  whitelist: ['session'],
}

const reducers = combineReducers({
    routing: routerReducer,
    forms: formsReducer,
    session: sessionReducer,
    rehidration: rehidrationReducer
  }
);

export default persistReducer(config, reducers)
