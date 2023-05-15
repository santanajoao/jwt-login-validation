import styles from './layout.module.css'

export default function SignLayout({ children }) {
  return (
    <main className={styles.page}>{children}</main>
  )
}
