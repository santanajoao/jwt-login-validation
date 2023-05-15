'use client'

import styles from './style.module.css'

export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={styles.form}>{children}</form>
  )
}
