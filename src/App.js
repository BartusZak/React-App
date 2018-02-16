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
    otherState: 'balalala',
    showPersons: false
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

  nameChangedHandler  = (event) => {
    this.setState({
      persons: [
      { name: 'Bartek', age: 22},
      { name: event.target.value, age: 32},
      { name: 'Kupa', age: 10}
      ]
    })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    // INLINE STYLING
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons  = (
        <div>
          {this.state.persons.map(person => {
            return <Person  name={person.name} age={person.age} />
          })}
      </div>
      );
    }
     return (
      <div className="App">
        <h1>Siema ziomy!</h1>
        <p>To na prawede działa!</p>

        {/* NOT RECCOMENDED using ARROW Function */}
        <button style={style} onClick={this.togglePersonHandler}>Toggle Osoby</button>
        {persons}        
      </div>
    ); 
    //return React.createElement('div', {className:  'App'}, React.createElement('h1', null, 'co tam'));
  }
}

export default App;
