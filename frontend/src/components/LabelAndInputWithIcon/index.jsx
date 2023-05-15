import InputWithIcon from "../InputWithIcon";
import styles from './style.module.css';

export default function LabelAndInputWithIcon({
  label, id, inputType, required, placeholder, Icon, name, error, onChange,
}) {
  return (
    <div className={styles.label_input_wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <InputWithIcon
        type={inputType}
        required={required}
        placeholder={placeholder}
        id={id}
        Icon={Icon}
        name={name}
        hasError={!!error}
        onChange={onChange}
      />

      {error && (<span className={styles.error}>{error}</span>)}
    </div>
  )
}
