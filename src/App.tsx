import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Greeting from './components/Greeting'
import * as Composer from './containers/Composer'

const userName = 'Chet';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting.Greeting userName={userName}/>
        <Composer.Composer />
      </header>
    </div>
  );
}

export default App;
