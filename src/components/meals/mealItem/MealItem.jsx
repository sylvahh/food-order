import React, { useContext } from 'react';
import CartContext from '../../../store/CartContext';
import styles from '../../../Styles.module.css';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const priceToDecimal = `$ ${price.toFixed(2)}`;

  const addTocartHandler = (amount) => {
    cartCtx.addItem({id, name, amount, price});
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceToDecimal}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddtoCart={addTocartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
