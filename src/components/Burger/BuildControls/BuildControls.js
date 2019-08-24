import React from 'react';
import styles from './buildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}

];

const buildControls = (props) => (
    <div className = {styles.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
                key = {ctrl.label} l
                label = {ctrl.label} 
                added = { () => props.ingredientAdded(ctrl.type)}
                removed = {() => props.ingredientsRemoved(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default  buildControls;