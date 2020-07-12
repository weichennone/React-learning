import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

// useEffect: hook

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    // it runs for every app update (render cycle)
    useEffect(() => { 
        console.log('[Cockpit.js] useEffect')
        // HTTP request...
        // const timer = setTimeout(() => {
        //     alert("save data to cloud")
        // }, 1000)
        toggleBtnRef.current.click();

        // clean up work here
        return () => {
            // clearTimeout(timer)
            console.log('[Cockpit.js] cleanup useEffect')
        }
    }, [props.persons]) // can use empty array: []

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] 2nd cleanup useEffect')
        }
    })


    // stateless component, function component doesn't manage state
    let assignedclasses = [];
    let btnClass = ''

    if (props.showPersons) {
        btnClass = classes.Red
    }
    
    // if (props.persons.length <= 2) {
    if (props.personsLength <= 2) {
      assignedclasses.push(classes.red);
    }
    // if (props.persons.length <= 1) {
    if (props.personsLength <= 1) {
      assignedclasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(" ")}>This is really working!</p>
          
            <button 
                className={btnClass}
                ref={toggleBtnRef}
                onClick={props.clicked}>Toggle Persons</button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
            
        </div>
        
    )
}

export default React.memo(cockpit) // only input change -> re-render