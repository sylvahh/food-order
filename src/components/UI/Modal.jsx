import React from 'react'
import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import styles from '../../Styles.module.css';


const BackDrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />
}
const ModalOverlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}
const portal = document.getElementById('overlays')

const Modal = (props) => {
  return (
      <Fragment>
          {createPortal(<BackDrop onClose={props.onClose} />, portal) }
          {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
    </Fragment>
  )
}

export default Modal