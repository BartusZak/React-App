import React from 'react';

//IS6
const person = (props) => {
    return (
        <div>
            <p>Jestem {props.name} i mam {props.age} lat</p>
            <p>{props.children}</p>
        </div>

    
    )
};

export default person;