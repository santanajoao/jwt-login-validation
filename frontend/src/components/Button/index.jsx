import styles from './style.module.css'

export default function Button({ type, onClick, children, style }) {
  return (
    <button
      type={type}
      style={style}
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  )
}
