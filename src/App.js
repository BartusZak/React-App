import React, { Component } from 'react';
import './App.css';
//dodaje plik żeby stworzyć component
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Bartek', age: 22},
      { name: 'Noziak', age: 32},
      { name: 'Kupa', age: 10}
    ]
  }
  
  //IS6 Arrow Function
  switchNameHandler = () => {
    console.log("Was clicked");
  };

  render() {
     return (
      <div className="App">
        <h1>Siema ziomy!</h1>
        <p>To na prawede działa!</p>
        <button onClick={this.switchNameHandler}>Zamień imię</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Moje zaintersowanie: siłownia</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    ); 
    //return React.createElement('div', {className:  'App'}, React.createElement('h1', null, 'co tam'));
  }
}

export default App;
