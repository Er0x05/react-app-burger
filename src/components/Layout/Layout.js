import React from 'react';

import Aux from '../../Hoc/AuxSupport';
import Navigation from '../Navigation/Navigation';

import classes from './Layout.module.css';

const layout = (props) =>(
    <Aux>
        <Navigation />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;