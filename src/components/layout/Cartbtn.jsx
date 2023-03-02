import React, { useEffect, useState } from 'react'
import CartIcon from '../cart/CartIcon'
import styles from '../../Styles.module.css';
import CartContext from '../../store/CartContext';
import { useContext } from 'react';


const Cartbtn = ({ onClick }) => {
  const [addAnimate, setAddAnimate] = useState(false)
  const {items} = useContext(CartContext)

  const btnClasses = `${styles.button} ${addAnimate && styles.bump}`
  useEffect(() => {
    if (items.length === 0) {
    return 
    }
    setAddAnimate(true)
  const timer = setTimeout(() => {
    setAddAnimate(false)
  }, 300);
    return () => {
      clearTimeout(timer)
    }
  }, [items])
  

  const numberOfitems = items.reduce((currNumber, item) => {
    return currNumber + item.amount
  }, 0)
  return (
      <button className={btnClasses} onClick={onClick}>
          <span className={styles.icon}>
              <CartIcon/>
          </span>
          <span> your cart</span>
      <span className={styles.badge}>{numberOfitems }</span>

    </button>
  )
}

export default Cartbtn