import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

import reducers from './reducers';
import rootSaga from './sagas';
import history from 'common/history'


const sagaMiddleware =  createSagaMiddleware();
const routerMiddleware = createRouterMiddleware(history)

const middlewares = [sagaMiddleware, routerMiddleware, logger]

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
