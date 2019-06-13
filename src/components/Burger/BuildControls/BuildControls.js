import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    {label: 'cheese', type: 'cheese'},
    {label: 'bacon', type: 'bacon'},
    {label: 'meat', type: 'meat'},
    {label: 'salad', type: 'salad'}
]

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(el=>(
            <BuildControl 
                key={el.label} 
                label={el.label}
                added={()=>props.ingredientAdded(el.type)}
                removed={()=>props.ingredientRemoved(el.type)}
                disabled = {props.disabled[el.type]}
            />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button>
    </div>
)

export default buildControls;