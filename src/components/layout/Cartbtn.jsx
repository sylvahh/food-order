import React from 'react'
import CartIcon from '../cart/CartIcon'
import styles from '../../Styles.module.css';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';


const Cartbtn = ({ onClick }) => {
  const cartCtx = useContext(CartContext)

  const numberOfitems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount
  }, 0)
  return (
      <button className={styles.button} onClick={onClick}>
          <span className={styles.icon}>
              <CartIcon/>
          </span>
          <span> your cart</span>
      <span className={styles.badge}>{numberOfitems }</span>

    </button>
  )
}

export default Cartbtn