import styles from './style.module.css'

export default function InputWithIcon({ type, id, required, Icon }) {
  return (
    <div className={styles.input_container}>
      <Icon className={styles.input_icon} />
      <input
        type={type}
        required={required}
        id={id}
        className={styles.input}
      />
    </div>
  )
}
