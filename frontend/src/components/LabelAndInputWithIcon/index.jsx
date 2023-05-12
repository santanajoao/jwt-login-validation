import styles from './style.module.css';

export default function LabelAndInputWithIcon({ label, id, inputType, Icon }) {
  return (
    <div className={styles.label_input_wrapper}>
      <label htmlFor={id} className={styles.label}>
        { label }
      </label>
      
      <div className={styles.input_container}>
        <Icon className={styles.input_icon} />
        <input
          type={inputType}
          id={id}
          className={styles.input}
        />
      </div>
    </div>
  )
}
