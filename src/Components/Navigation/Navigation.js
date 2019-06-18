import React from 'react';

import classes from './Navigation.module.css';
import Logo from '../Logo/Logo';

const navigation = () =>(
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            ...
        </nav>
    </header>
);

export default navigation;