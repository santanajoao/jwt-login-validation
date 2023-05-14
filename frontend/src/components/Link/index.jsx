import Link from "next/link"
import styles from './style.module.css';

export default function CustomLink({ children, href }) {
  return (
    <Link href={href} className={styles.link}>{children}</Link>
  )
}
