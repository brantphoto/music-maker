import {createAction, createReducer} from '@reduxjs/toolkit'

export const increment = createAction('increment')
export const decrement = createAction('decrement')

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
