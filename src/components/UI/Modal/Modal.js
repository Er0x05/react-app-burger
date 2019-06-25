import React from 'react';

import Aux from '../../../Hoc/AuxSupport';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

class Modal extends React.Component{

    shouldComponentUpdate(nextProps,nextState){
        return this.props.show !== nextProps.show|| nextProps.children !== this.props.children
    }
    
    componentWillUpdate(){
        console.log('[Modal] will update')
    }
    
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalCancel} />
                <div 
                    className={classes.Modal}
                    style={{transform: this.props.show? 'translateY(0)' : 'translateY(-100vh)' }}
                    >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;