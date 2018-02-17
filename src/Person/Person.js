import React from 'react';
import classes from './Person.css';

//IS6
const person = (props) => {
    const rnd = Math.random();

        if (rnd > 0.7){
            throw new Error("O kurwa!");
        }
    return (
        
        <div className={classes.Person}>
            <p onClick={props.click}>Jestem {props.name} i mam {props.age} lat</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>    
    )
};

export default person;