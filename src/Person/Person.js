import React from 'react';
import Radium from 'radium'

import './Person.css';
//IS6
const person = (props) => {
    const style = {
        '@media(min-width: 500px)':{
            width: '450px'
        }
    };
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>Jestem {props.name} i mam {props.age} lat</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    
    )
};

export default Radium(person);