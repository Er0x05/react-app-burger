import React from 'react';

import Aux from '../../Hoc/AuxSupport';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

class Layout extends React.Component{
    state = {
        showSideDrawer: false
    };

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    };

    sideDrawerOpenHandler = () => {
        this.setState( (prevState)=>{ 
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    };

    render(){
        return(
            <Aux>
                <Toolbar clicked={this.sideDrawerOpenHandler} />
                <SideDrawer 
                    closed={this.sideDrawerCloseHandler}
                    open={this.state.showSideDrawer} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    };
}

export default Layout;