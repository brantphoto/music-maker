import {combineReducers} from '@reduxjs/toolkit'
import * as ComposerReducer from './containers/Composer/reducer'
export const rootReducer = combineReducers({
  composerReducer: ComposerReducer.composerReducer
})
export type RootState = ReturnType<typeof rootReducer>
