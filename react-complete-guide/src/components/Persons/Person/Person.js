import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    // make a focus
    componentDidMount() {
        // document.querySelector('input').focus();
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render () {
        console.log('[Person.js] rendering...')
        // return (
        //     <div className={classes.Person}>
        //         <p onClick={this.props.click}>
        //             I'm a {this.props.name} and I am {this.props.age} years old!
        //         </p>
        //         <p>{this.props.children}</p>
        //         <input 
        //             type="text" 
        //             onChange={this.props.changed} 
        //             value={this.props.name}/>
        //     </div>       
        // )
        // return [
            // <p key='ol' onClick={this.props.click}>
            //     I'm a {this.props.name} and I am {this.props.age} years old!
            // </p>, 
            // <p key='il'>{this.props.children}</p>, 
            // <input 
            // key='zl' 
            // type="text" 
            // onChange={this.props.changed} 
            // value={this.props.name}/>
        // ]
        return ( //React.createElement()
            // <React.Fragment>
            <Aux>
                <AuthContext.Consumer>
                    {(context) => {context.authenticated ? (<p>Authenticated</p>) : (<p>Please log in</p>)}}
                </AuthContext.Consumer>
                {/* {this.props.isAuth ? <p>Authenticated</p> : <p>Please log in</p>} */}
                <p key='ol' onClick={this.props.click}>
                    I'm a {this.props.name} and I am {this.props.age} years old!
                </p> 
                <p key='il'>{this.props.children}</p>
                <input 
                key='zl' 
                // ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </Aux>
            // </React.Fragment>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

// const person = (props) => {
//     console.log('[Person.js] rendering...')
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
//             {/* <p>{props.children}</p> */}
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
        
//     )
// };

export default withClass(Person, classes.Person);