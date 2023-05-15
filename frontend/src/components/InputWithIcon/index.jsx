'use client'

import styles from './style.module.css'

export default function InputWithIcon({
  type, id, required, placeholder, Icon, name, hasError, onChange,
}) {
  return (
    <div className={styles.input_container}>
      <Icon className={styles.input_icon} />
      <input
        data-error={hasError}
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        className={styles.input}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}
