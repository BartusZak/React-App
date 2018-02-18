import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Comment {
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>Jestem {this.props.name} i mam {this.props.age} lat</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>    
        )
    }
}

export default Person;