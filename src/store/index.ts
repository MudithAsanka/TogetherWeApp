import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {togetherWeReducer, togetherWeRootSaga} from '../model/togetherWeModel';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    app: togetherWeReducer,
   
  }),
  applyMiddleware(sagaMiddleware),
);

// then run the saga
const rootSagas = [
  togetherWeRootSaga,
  
];
rootSagas.forEach(sagaMiddleware.run);

export default store;
