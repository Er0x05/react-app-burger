import React from 'react';

import bugerlogo from '../../assets/burger-logo.png';

import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
        <img src={bugerlogo} />
    </div>
)

export default logo;