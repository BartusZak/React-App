import React, { Component } from 'react';
import classes from './App.css';
//dodaje plik żeby stworzyć component
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons){
      persons  = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id} >
              <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
              </ErrorBoundary>
          })}
      </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

     return (
        <div className={classes.App}>
          <h1>Siema ziomy!</h1>
          <p className={assignedClasses.join(' ')}>To na prawede działa!</p>

          {/* NOT RECCOMENDED using ARROW Function */}
          <button  className={btnClass} onClick={this.togglePersonHandler}>Toggle Osoby</button>
          {persons}        
        </div>
    ); 
    //return React.createElement('div', {className:  'App'}, React.createElement('h1', null, 'co tam'));
  }
}

export default App;
