import React, { Component } from 'react';
import './App.css';
//dodaje plik żeby stworzyć component
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd123', name: 'Bartek', age: 22},
      { id: '1wsd', name: 'Noziak', age: 32},
      { id: 'asdwww1', name: 'Kupa', age: 10}
    ],
    otherState: 'balalala',
    showPersons: false
  }

  nameChangedHandler  = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    //modern approach spread operator
    const person = {
      ...this.state.persons[personIndex]
    };

    //alternative 
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  deletePersonHandler = (personIndex) => {
    //slice tworzy kopJe
    //const persons = this.state.persons.slice;
    //alternatywa bardziej nowoczesne
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

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
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
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
