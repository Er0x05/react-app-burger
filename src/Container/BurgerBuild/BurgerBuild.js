import React from 'react';

import Aux from '../../Hoc/AuxSupport';
import Burger from '../../Components/Burger/Burger';

class BurgerBuild extends React.Component {
    
    state = {
        ingredients: {
            cheese: 2,
            bacon: 1,
            meat: 2,
            salad: 1
        }
    }
    
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <div>Build controller</div>
            </Aux>
        );
    };
};

export default BurgerBuild; 