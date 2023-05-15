import styles from './style.module.css'

export default function ErrorMessage({ children }) {
  return (
    <span className={styles.error}>{children}</span>
  )
}
