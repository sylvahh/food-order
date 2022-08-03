import {Fragment} from 'react'
import styles from './Styles.module.css';
import mealsImg from '../../assets/meals.jpg'

const Header = props => {
  return (
      <Fragment>
          <header className={styles.header}>
              <h1>open kitchen</h1>
              <button>cart</button>
          </header>
          <div className={styles['main-image']}>
              <img src={mealsImg} alt="" />
          </div>
    </Fragment>
  )
}

export default Header