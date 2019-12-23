import { configureStore } from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import * as ReduxSaga from 'redux-saga'
import createReduxSagaMiddleware from 'redux-saga'
import {autoIncrementSaga} from './containers/Composer/reducer'

const sagaMiddleware = createReduxSagaMiddleware() 
export const _store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})

type EnhancedStoreType = {
  dispatch(action: ReduxSaga.Saga): ReduxSaga.SagaIterator
} & typeof _store

export const store: EnhancedStoreType = _store

export type AppDispatch = typeof _store.dispatch;

sagaMiddleware.run(autoIncrementSaga)
