import React, { PureComponent } from 'react';
import classes from './App.css';
//dodaje plik żeby stworzyć component
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'asd123', name: 'Bartek', age: 22},
        { id: '1wsd', name: 'Noziak', age: 32},
        { id: 'asdwww1', name: 'Kupa', age: 10}
      ],
      otherState: 'balalala',
      showPersons: false
    };
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { id: 'asd123', name: 'Bartek', age: 22},
  //     { id: '1wsd', name: 'Noziak', age: 32},
  //     { id: 'asdwww1', name: 'Kupa', age: 10}
  //   ],
  //   otherState: 'balalala',
  //   showPersons: false
  // }

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
    console.log('[App.js] Inside render().');
    let persons = null;

    if (this.state.showPersons){
      persons  = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
    }
     return (
        <div className={classes.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>Pokaż ziomeczków</button>
          <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonHandler}/>

          {persons}        
        </div>
    ); 
    //return React.createElement('div', {className:  'App'}, React.createElement('h1', null, 'co tam'));
  }
}

export default App;
