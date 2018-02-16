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
    ],
    otherState: 'balalala'
  }

  //IS6 Arrow Function
  switchNameHandler = (newName) => {
    // console.log("Was clicked");
    // TO NIE DZIAŁAthis.state.persons[0].name = "Bartłomiej";
    this.setState({
      persons: [
      { name: newName, age: 22},
      { name: 'Noziak', age: 32},
      { name: 'Kupa', age: 5}
      ]
    })
  };

  render() {
     return (
      <div className="App">
        <h1>Siema ziomy!</h1>
        <p>To na prawede działa!</p>

        {/* NOT RECCOMENDED using ARROW Function */}
        <button onClick={() => this.switchNameHandler('Bartłomiej!!')}>Zamień imię</button>

        <Person
         name={this.state.persons[0].name}
         age={this.state.persons[0].age}/>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        // BETTER USE BIND PROPERTY
        click={this.switchNameHandler.bind(this, "Bartek!")}>Moje zaintersowanie: siłownia</Person>
        
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    ); 
    //return React.createElement('div', {className:  'App'}, React.createElement('h1', null, 'co tam'));
  }
}

export default App;
