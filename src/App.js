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
        <Person name="Bartek" age="22"/>
        <Person name="Noziak" age="32">Moje zaintersowanie: siłownia</Person>
        <Person name="Kupa" age="10"/>
      </div>
    ); 
    //return React.createElement('div', {className:  'App'}, React.createElement('h1', null, 'co tam'));
  }
}

export default App;
