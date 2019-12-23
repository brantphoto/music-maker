import React from 'react';
import * as Redux from 'redux'
import {RootState} from '../../rootReducer';
import {connect} from 'react-redux'
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
    return (
      <div>
        <div>
          <button onClick={increment}/>
            {count}
          <button onClick={decrement}/>
          <button onClick={autoIncrement}>AUTO</button>
        </div>
        <ul className="set">
          <li className="white b"></li>
          <li className="black as"></li>
          <li className="white a"></li>
          <li className="black gs"></li>
          <li className="white g"></li>
          <li className="black fs"></li>
          <li className="white f"></li>
          <li className="white e"></li>
          <li className="black ds"></li>
          <li className="white d"></li>
          <li className="black cs"></li>
          <li className="white c"></li>
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
