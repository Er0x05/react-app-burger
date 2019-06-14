import React from 'react';

import Aux from '../../../Hoc/AuxSupport';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalCancel} />
        <div 
            className={classes.Modal}
            style={{transform: props.show? 'translateY(0)' : 'translateY(-100vh)' }}
            >
            {props.children}
        </div>
    </Aux>
)

export default modal;