import Link from "next/link"
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import styles from './page.module.css';
import InputWithIcon from "@/components/InputWithIcon";

export const metadata = {
  title: 'Entre em sua conta',
}

export default function SignIn() {
  return (
    <main className={styles.page}>
      <h1>Entre em sua conta</h1>
      
      <form className={styles.form}>
        <div className={styles.inputs_wrapper}>
          
          <div className={styles.label_input_wrapper}>
            <label htmlFor="email-input" className={styles.label}>
              Endereço de email
            </label>
            
            <InputWithIcon id="email-input" type="email" Icon={AiOutlineMail} />
          </div>

          <div className={styles.label_input_wrapper}>
            <label htmlFor="email-input" className={styles.label}>
              Sua senha
            </label>

            <InputWithIcon
              id="password-input"
              type="password"
              Icon={AiOutlineLock}
            />

            <Link href="forget" className={styles.link}>Esqueceu sua senha?</Link>
          </div>
        </div>

        <button type="submit" className={styles.button}>Entrar</button>
      </form>
    </main>
  )
}
