import {Fragment} from 'react'
import styles from '../../Styles.module.css';
import mealsImg from '../../assets/meals.jpg'
import Cartbtn from './Cartbtn';

const Header = ({onShowModal}) => {
  
  return (
      <Fragment>
          <header className={styles.header}>
              <h1>open kitchen</h1>
        <Cartbtn onClick={ onShowModal} />
          </header>
          <div className={styles['main-image']}>
              <img src={mealsImg} alt="" />
          </div>
    </Fragment>
  )
}

export default Header