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
        {controls.map(el=>{
            return <BuildControl key={el.label} label={el.label} />
            }
        )}
    </div>
)

export default buildControls;