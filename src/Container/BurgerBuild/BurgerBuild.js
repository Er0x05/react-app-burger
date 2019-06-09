import React from 'react';

import Aux from '../../Hoc/AuxSupport';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BuildControls/BuildControls';

class BurgerBuild extends React.Component {
    
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        }
    }
    
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls />
            </Aux>
        );
    };
};

export default BurgerBuild; 