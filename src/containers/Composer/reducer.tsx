import {createAction, createReducer} from '@reduxjs/toolkit'
import {takeEvery, put} from 'redux-saga/effects'

export const increment = createAction('increment')
export const decrement = createAction('decrement')
export const autoIncrement = createAction('autoIncrement')

type ComposerState = {count: number}
const composerState : ComposerState = {count: 0}

export const composerReducer = createReducer(composerState, builder =>
  builder
    .addCase(increment, (state , action) : ComposerState => {
      state.count = state.count + 1;
      return state;
    })
    .addCase(decrement, (state, action) : ComposerState => {
      state.count = state.count - 1;
      return state;
    })
)

//SAGAS

export function* autoIncrementSaga() {
  console.log('hello')
  yield takeEvery(autoIncrement, autoIncrementFlow)
}

export function* autoIncrementFlow() {
  console.log('hi')
  yield put(increment());
  yield put(increment());
  yield put(increment());
}


