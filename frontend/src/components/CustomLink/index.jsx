import Link from "next/link"
import styles from './style.module.css'

export default function CustomLink({ children, href, style }) {
  return (
    <Link style={style} href={href} className={styles.link}>
      {children
    }</Link>
  )
}
