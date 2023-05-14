import styles from './style.module.css'

export default function InputWithIcon({
  type, id, required, placeholder, Icon, name,
}) {
  return (
    <div className={styles.input_container}>
      <Icon className={styles.input_icon} />
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        className={styles.input}
        name={name}
      />
    </div>
  )
}
