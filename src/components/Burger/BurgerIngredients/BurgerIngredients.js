import React, { Component } from "react";
import styles from "./burgerIngredients.module.css";
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={styles.BreadBottom} />;
        //if break is not stated at the end of each case then the code will not return if switch and case are equal
        break;
      case "bread-top":
        ingredient = <div className={styles.BreadTop} />;
        break;
      case "meat":
        ingredient = <div className={styles.Meat} />;
        break;
      case "cheese":
        ingredient = <div className={styles.Cheese} />;
        break;
      case "salad":
        ingredient = <div className={styles.Salad} />;
        break;
      case "bacon":
        ingredient = <div className={styles.Bacon} />;
        break;
      // default case if nothing is a match
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
