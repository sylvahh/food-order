import React from 'react'
import styles from '../../Styles.module.css';


const Input = React.forwardRef(({input,label,},ref) => {
  return (
      <div className={styles.input}>
          <label htmlFor={input.id}>{ label}</label>
          <input ref={ref} {...input} />
    </div>
  )
})

export default Input