import styles from './style.module.css'

export default function InputsWrapper({ children }) {
  return (
    <div className={styles.inputs_wrapper}>{children}</div>
  )
}
