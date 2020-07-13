import React from 'react';
import classes from './Daily.module.css';

const daily = (props) => (
    <div className={classes.Daily}>
        <h4>{props.date}</h4>
        <div>{props.finishedTask.map(val => {
            return (
                <p> {val} </p>
            )
        })}</div>
    </div>
);

export default daily;