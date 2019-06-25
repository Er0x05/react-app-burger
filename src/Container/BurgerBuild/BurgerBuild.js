import React from 'react';

import Aux from '../../Hoc/AuxSupport';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../Components/UI/Spinner/Spinner';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuild extends React.Component {
    
    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            meat: 0,
            salad: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchaseOrder: false,
        loadingStatus: false
    }

    updatePurchaseState = (ingredients) =>{
        const sum = Object.keys(ingredients)
            .map((el)=>ingredients[el])
            .reduce((cur,acc)=>{return cur+acc},0);
        this.setState({purchasable: sum>0});
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchaseOrder: true})
    };
    
    purchaseCancelHandler = () => {
        this.setState({purchaseOrder: false})
    };

    purchaseContinueHandler = () => {
        this.setState({ loadingStatus: true })
        const data = {
            ingredients: this.state.ingredients,
            totalPrice: this.totalPrice,
            customer: {
                name: 'Max',
                address: {
                    street: 'Geylang 88',
                    zipCode: '12345',
                    country: 'Singapore'
                },
                email: 'test@test.com'
            }

        }
        axios.post('/order.json',data)
            .then(response=>{
                this.setState({ loadingStatus: false, purchaseOrder: false });
                console.log(response)})
            .catch(error=>{
                this.setState({ loadingStatus: false, purchaseOrder: false });
                console.log(error)})
    }


    render(){
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) disabledInfo[key] = disabledInfo[key] <=0;

        let orderSummary;
        if (this.state.loadingStatus){
            orderSummary = <Spinner />
        }else{
            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancel={this.purchaseCancelHandler}
                purchaseContinue={this.purchaseContinueHandler} />
        }

        return(
            <Aux>
                <Modal 
                    show={this.state.purchaseOrder}
                    modalCancel={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger 
                    ingredients={this.state.ingredients} />
                <BurgerControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable = {this.state.purchasable}
                    price = {this.state.totalPrice}
                    ordered= {this.purchaseHandler}
                />
            </Aux>
        );
    };
};

export default BurgerBuild; 