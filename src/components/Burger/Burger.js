import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'; 
import classes from './Burger.module.css';

const buger = (props) => {

    let transIngredients = Object.keys(props.ingredients).map((ig)=>{
        return [...Array(props.ingredients[ig])].map((_,index)=>{
            return <BurgerIngredient key={ig+index} type={ig} />
        })
    }).reduce((acc,el)=>{
        return acc.concat(el);
    },[]);

    if (transIngredients.length === 0) transIngredients = <p>Please start adding ingreindients.</p>;
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
                {transIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default buger;