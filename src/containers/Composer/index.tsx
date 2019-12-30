import React from 'react';
import * as Redux from 'redux'
import {RootState} from '../../rootReducer';
import {connect} from 'react-redux'
import classnames from 'classnames'
import {increment, decrement, autoIncrement, playNote} from './reducer' 
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type MyProps = { 
  count: number,
  note: string,
  increment:() => void,
  decrement: () => void,
  autoIncrement: () => void,
  playNote: ActionCreatorWithPayload<string> 
};

type MyState = {
}

class ComposerContainer extends React.Component<MyProps, MyState> {
  render() {
    const {count, increment, decrement, autoIncrement, note, playNote} = this.props;
    const notes = ['f', 'f-sharp', 'g', 'g-sharp', 'a', 'a-sharp', 'b', 'c', 'c-sharp', 'd', 'd-sharp', 'e']
    return (
      <div>
        <div>
          <button onClick={increment}/>
            {count}
          <button onClick={decrement}/>
          <button onClick={autoIncrement}>AUTO</button>
          <div>{note}</div>
        </div>
        <ul className="set">
          {
            notes.map((singleNote) => (
              <li className={
                classnames(
                {
                white: singleNote.length === 1,
                black: singleNote.length !== 1,
                [singleNote]: true,
                }
              )
              }><button onClick={() => playNote(singleNote)}></button></li> 
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
  count: state.composerReducer.count,
  note: state.composerReducer.note
})

const mapDispatch = {
  increment,
  decrement,
  autoIncrement,
  playNote,
};

export const Composer = connect(
    mapState,
    mapDispatch
)(ComposerContainer)
