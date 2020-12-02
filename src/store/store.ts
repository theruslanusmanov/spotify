import {applyMiddleware, compose, createStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducers'
import {initialState} from './root.state'
import rootSaga from './root.saga'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducers,
  initialState,
  composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
)

sagaMiddleware.run(rootSaga)

export default store
