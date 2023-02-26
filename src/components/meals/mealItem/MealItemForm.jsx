import React, { useState, useRef } from 'react';
import styles from '../../../Styles.module.css';
import Input from '../../UI/Input';

const MealItemForm = ({ id, onAddtoCart }) => {
  const [isValid, setIsValid] = useState(true)

  const amountRef = useRef()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const enteredAmount = amountRef.current.value
    const enterdAmountToNum = +enteredAmount;
    
    if (enteredAmount.trim().length === 0 || enterdAmountToNum < 1 || enterdAmountToNum > 5) {
      setIsValid(false)
      return
    }
    onAddtoCart(enterdAmountToNum)
    

  } 
  return (
    <form action='' className={styles.form} onSubmit={handleSubmit} >
      <Input
        ref={amountRef}
        label='Amount'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
         
        }}
      />
      <button>+ Add</button>
      {!isValid && <span>Please enter a valid amount (1-5)</span>}
    </form>
  );
};

export default MealItemForm;
