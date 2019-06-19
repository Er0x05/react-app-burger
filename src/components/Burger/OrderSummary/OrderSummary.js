import React from 'react';
import Aux from '../../../Hoc/AuxSupport';

import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component{

    componentWillUpdate(){
        console.log('[OrderSummary] will update')
    }
    
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(el=><li key={el}><span style={{textTransform: 'capitalize'}}>{el}:{this.props.ingredients[el]}</span></li>);

        return(
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to check?</p>
            <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>
        )
    }
}

export default OrderSummary;