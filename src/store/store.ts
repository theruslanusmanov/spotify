import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'
import createSagaMiddleware from 'redux-saga'
import { initialState } from './rootState'

// Todo: https://github.com/Lemoncode/redux-sagas-typescript-by-example/tree/master/05_all/src
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']) ||
  compose

export const store = createStore(
  rootReducers,
  initialState,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
)

// sagaMiddleware.run(rootSaga);

