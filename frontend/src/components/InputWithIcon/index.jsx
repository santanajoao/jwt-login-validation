import styles from './style.module.css';

export default function InputWithIcon({ type, id, Icon }) {
  return (
    <div className={styles.input_container}>
      <Icon className={styles.input_icon} />
      <input
        type={type}
        id={id}
        className={styles.input}
      />
    </div>
  )
}
