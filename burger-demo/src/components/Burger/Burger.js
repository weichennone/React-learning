import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // transformation code
    let transformnedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            }); // [,]
        })
        // flatten the array
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    
    if (transformnedIngredients.length === 0) {
        transformnedIngredients = <p>Please start adding ingradients</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformnedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;