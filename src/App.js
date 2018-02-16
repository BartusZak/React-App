import React, { Component } from 'react';
import './App.css';
//dodaje plik żeby stworzyć component
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
      <div className="App">
        <h1>Siema ziomy!</h1>
        <p>To na prawede działa!</p>
        <Person/>
        <Person/>
        <Person/>
      </div>
    ); 
    //return React.createElement('div', {className:  'App'}, React.createElement('h1', null, 'co tam'));
  }
}

export default App;
