import React from 'react';
import Task from './Task/Task';
import classes from './Tasks.module.css';
import AddTask from './AddTask/AddTask';

const tasks = (props) => (
    <div className={classes.Tasks}>
        {/* {props.tasknames.map((taskname) => {
            return <Task taskname={taskname[0]} active={taskname[1]}/>;
        })} */}
        {Object.keys(props.tasknames).map(key => {
            return (
                <Task 
                    key={key}
                    taskname={props.tasknames[key][0]} 
                    active={props.tasknames[key][1]}
                    clicked={() => props.clicked(key)}
                    doneClicked={() => props.doneClicked(key)}/>
            );
        })}
        <AddTask clicked={props.addClicked}/>
    </div>
);

export default tasks;