import React from 'react';
import classes from './Task.module.css';
import TaskController from '../TaskController/TaskController';
import Button from '../../UI/Button/Button';

const task = (props) => {

    const value = props.active ? "Active" : "Idle";
    return (
        <div className={[classes.Task, classes[value]].join(" ")}>
            <button className={classes["Done"]} onClick={props.doneClicked}>Done</button>
            <div className={classes["Name"]} onClick={props.clicked}>{props.taskname}</div>
            {/* <TaskController /> */}
        </div>
    );
    
};

export default task;