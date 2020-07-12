import React from 'react';
import classes from './AddTask.module.css';

const addTask = (props) => (
    <div
        className={classes.AddTask}
        onClick={props.clicked}>
        <p>+</p>
    </div>
);

export default addTask;