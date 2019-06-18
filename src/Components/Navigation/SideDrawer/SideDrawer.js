import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../Hoc/AuxSupport';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    let attachedClassed;
    props.open ? attachedClassed = [classes.SideDrawer, classes.Open]:
                 attachedClassed = [classes.SideDrawer, classes.Close];
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClassed.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;