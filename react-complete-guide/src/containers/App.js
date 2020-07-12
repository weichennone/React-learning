import React, { Component } from 'react';
import classes from './App.css'
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

// save type
// npm install --save prop-types

class App extends Component {  
  // class-based component: can access to state, has lifecycle hooks; this.state & this.props
  // functional component: can access to state, doesn't have lifecycle hooks; props.??

  // Component Lifecycle: only available in class-based components
  // Creation: constructor(props) --> getDerivedStateFromProps (sync state) --> render()
  // Update: getDerivedStateFromProps --> shouldComponentUpdate (may cancel updating process) --> render()

  // How react updates the DOM
  // old virtual DOM <-> re-rendered virtual DOM (render())
  // difference ? update "real" DOM : don't touch "real" DOM

  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
    // stateful component
    this.state = {persons: [
      {id: '1', name: 'Xam', age: 28},
      {id: '2', name: 'Max1', age: 29},
      {id: '3', name: 'Max2', age: 26}
      ],
      showPersons: false,
      changeCounter: 0,
      authenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
  }

  // for improving perfermance
  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextState, nextProps) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  // for improving perfermance
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // this.setState({
    //   persons: persons,
    //   changeCounter: this.state.changeCounter + 1 // not gurarantee to update at once
    // });

    // update the state when depends on old state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.state.changeCounter + 1
      }
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); // <----
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render () {
    console.log('[App.js] render')

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        // array
        <div >
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div> 
      );
      // btnClass = classes.Red
    }

    // let classes = ['red', 'bold'].join(' '); // red bold
    

    return (

        // <div className={classes.App}>
        <Aux>
        {/* <WithClass classes={classes.App}> */}
        <AuthContext.Provider 
          value={{
            authenticated: this.state.authenticated, 
            login: this.loginHandler
          }}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            // login={this.loginHandler}
            // persons={this.state.persons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}/>
          {persons}
        </AuthContext.Provider>
        {/* </WithClass> */}
        </Aux>
        // </div>
      
    );

  }
}

export default withClass(App, classes.App);
