import React from 'react'
import styles from '../../Styles.module.css';
import Modal from '../UI/Modal';

const dummy = [{ id: 1, name:'sushi', price: '12.99'}]

const Carts = ({onCloseModal}) => {
    const cartItems = <ul className={styles['cart-items']}>
        {dummy.map(item => <li key={item.id}> { item.name}</li>)}
    </ul>
  return (
      <Modal onClose={onCloseModal}>
          {cartItems}
          <div className={styles.total}>
              <span>total amount</span>
              <span>33.45</span>
          </div>
          <div className={styles.actions}>
              <button className={styles['button--alt']} onClick={onCloseModal}>Close</button>
              <button className={styles.button}>Order</button>
          </div>
    </Modal>
  )
}

export default Carts