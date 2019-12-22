import React from 'react';
import {RootState} from '../../rootReducer';
import {connect} from 'react-redux'

type MyProps = {
  // using `interface` is also ok
  count: number;
};
type MyState = {
};
class ComposerContainer extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div>
         {this.props.count}
      </div>
    );
  }
}

const mapState = (state: RootState) => ({
  count: state.composerReducer.count,
})

const mapDispatch = {
}

export const Composer = connect(
    mapState,
    mapDispatch
)(ComposerContainer)
