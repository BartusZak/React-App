import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) =>  {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons){
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); 
    }

    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return(
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>To na prawede działa!</p>

            {/* NOT RECCOMENDED using ARROW Function */}
            <button  className={btnClass} onClick={props.clicked}>Toggle Osoby</button>
        </Aux>
    );
};

export default cockpit;