import styles from './style.module.css';

export default function Form({ children }) {
  return (
    <form className={styles.form}>{children}</form>
  )
}
