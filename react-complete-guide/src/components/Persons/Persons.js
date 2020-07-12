// import React, {Component} from 'react'
import React, {PureComponent} from 'react';
// PureComponent: Component with shouldComponentUpdate check
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';


class Persons extends PureComponent {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps')
        return state
    }

    // performance optimization here
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate')
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    render () {
        console.log('[Persons.js] rendering...')
        // React allows to return "array of elements" as long as these elements have keys
        return this.props.persons.map((person, index) => {
            return <Person 
                click={() => this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}  
                isAuth={this.props.authenticated}
                />
        })
    }
}

// const persons = (props) => {
//     console.log('[Persons.js] rendering...')
//     return props.persons.map((person, index) => {
//         return <Person 
//             click={() => props.clicked(index)}
//             name={person.name} 
//             age={person.age}
//             key={person.id}
//             changed={(event) => props.changed(event, person.id)}  />
// })}

export default Persons