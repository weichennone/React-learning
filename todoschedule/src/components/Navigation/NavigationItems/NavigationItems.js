import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>History</NavigationItem>
        <NavigationItem link='/'>Stats</NavigationItem>
        <NavigationItem link='/'>Analysis</NavigationItem>
        <NavigationItem link='/'>Log</NavigationItem>
    </ul>
);

export default navigationItems;