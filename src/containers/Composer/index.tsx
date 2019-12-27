import React from 'react';
import * as Redux from 'redux'
import {RootState} from '../../rootReducer';
import {connect} from 'react-redux'
import classnames from 'classnames'
import {increment, decrement, autoIncrement} from './reducer' 

type MyProps = { 
  count: number,
  increment: () => void,
  decrement: () => void,
  autoIncrement: () => void,
};

type MyState = {
}

class ComposerContainer extends React.Component<MyProps, MyState> {
  render() {
    const {count, increment, decrement, autoIncrement} = this.props;
    const notes = ['f', 'f-sharp', 'g', 'g-sharp', 'a', 'a-sharp', 'b', 'c', 'c-sharp', 'd', 'd-sharp', 'e']
    return (
      <div>
        <div>
          <button onClick={increment}/>
            {count}
          <button onClick={decrement}/>
          <button onClick={autoIncrement}>AUTO</button>
        </div>
        <ul className="set">
          {
            notes.map((note) => (
              <li className={
                classnames(
                {
                white: note.length === 1,
                black: note.length !== 1,
                [note]: true,
                }
              )
              }></li> 
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
  count: state.composerReducer.count,
})

const mapDispatch = {
  increment,
  decrement,
  autoIncrement
};

export const Composer = connect(
    mapState,
    mapDispatch
)(ComposerContainer)
