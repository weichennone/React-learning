import React from 'react';
import classes from './Model.module.css';
import Aux from '../../../hoc/Aux';

const model = (props) => (
    <Aux>
        <div 
            className={classes.Model}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
    
);

export default model;