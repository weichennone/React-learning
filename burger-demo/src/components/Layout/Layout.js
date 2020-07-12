import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDraw';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    siderDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    siderDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true});
    }

    siderDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.siderDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.siderDrawerClosedHandler}/>
                {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
        
    }
}

export default Layout;