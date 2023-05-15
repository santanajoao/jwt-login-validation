import styles from './style.module.css'

export default function Button({ type, onClick, children }) {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}
