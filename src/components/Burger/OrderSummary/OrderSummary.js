import React from 'react';
import Aux from '../../../Hoc/AuxSupport';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
                                .map(el=><li key={el}><span>{el}:{props.ingredients[el]}</span></li>);

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    )
}

export default orderSummary;