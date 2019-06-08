import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'; 
import classes from './Burger.module.css';

const buger = (props) => {

    const transIngredients = Object.keys(props.ingredients).map((ig)=>{
        return [...Array(props.ingredients[ig])].map((_,index)=>{
            return <BurgerIngredient key={ig+index} type={ig} />
        })
    })
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
                {transIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default buger;