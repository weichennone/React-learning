import React from 'react';
import Aux from '../../../../hoc/Aux';
import Button from '../../../UI/Button/Button';

const addTaskDialog = (props) => {
    return (
        <Aux>
            <h3>Task Name</h3>
            <input type="text" onChange={props.changed} value={props.defaultTask}/>
            <p></p>
            <Button 
                btnType="Success" 
                clicked={props.addContinue}>ADD</Button>
            <Button
                btnType="Danger" 
                clicked={props.addCanceled}>CANCEL</Button>
        </Aux>
    )
}

export default addTaskDialog;
