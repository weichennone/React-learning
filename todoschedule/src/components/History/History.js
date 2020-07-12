import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../UI/Button/Button';

const history = (props) => {

    return (
        <Aux>
            <h3>History</h3>
            {Object.keys(props.history).map(key => {
                return (
                    <div></div>
                );
            })}
            <p></p>
            <Button
                btnType="Danger" 
                clicked={props.addCanceled}>CLOSE</Button>
        </Aux>
    );
}

export default history;