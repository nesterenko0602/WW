import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export default (initialState) => {
  let middlewareList = [
    thunk,
  ]

  const middlewares = applyMiddleware(...middlewareList)

  const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  const composeEnhancers = process.env.NODE_ENV === 'development' && devTools ? devTools : compose

  let store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(middlewares),
  )

  return store
}