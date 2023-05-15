import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import styles from '../../Styles.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';


const Carts = ({ onCloseModal }) => {
  const cartCtx = useContext(CartContext);
  const { items, totalAmount } = cartCtx;

    const removeItem = (id) => {
      cartCtx.removeItem(id)
  };
    const addItem = (item) => {
      cartCtx.addItem({...item, amount:1})
  };
  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addItem.bind(null,item)}
          onRemove={removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onCloseModal}>
      {cartItems}
      {items.length > 0 ? <div className={styles.total}>
        <span>total amount</span>
        <span>{`$ ${totalAmount.toFixed(2)}`}</span>
          </div>
    : <h2 style={{textAlign: 'center'}}>Oppss no item in your cart</h2>  
    }
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onCloseModal}>
          Close
        </button>
        {items.length > 0 && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Carts;
