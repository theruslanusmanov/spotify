import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import { initialState } from './root.state'
import rootSaga from './root.saga'

// Todo: https://github.com/Lemoncode/redux-sagas-typescript-by-example/tree/master/05_all/src
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
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store

