import React from 'react';

import bugerlogo from '../../assets/burger-logo.png';

import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={bugerlogo} alt="Burger Logo" />
    </div>
)

export default logo;