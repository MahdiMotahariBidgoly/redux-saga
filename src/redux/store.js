/** @format */

//254
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer,
  //   composeWithDevTools(applyMiddleware())
  composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
export default store
