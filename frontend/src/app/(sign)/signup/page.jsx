import Link from "next/link"
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import InputWithIcon from "@/components/InputWithIcon"
import styles from './page.module.css'

export const metadata = {
  title: 'Entre em sua conta',
}

export default function SignIn() {
  return (
    <>
      <h1>Crie sua conta</h1>
      
      <form className={styles.form}>
        <div className={styles.inputs_wrapper}>
          <div className={styles.label_input_wrapper}>
            <label htmlFor="name-input" className={styles.label}>
              Como você gostaria de ser chamado
            </label>

            <InputWithIcon
              type="text"
              required
              placeholder="Seu nome"
              id="name-input"
              Icon={AiOutlineUser}
            />
          </div>

          <div className={styles.label_input_wrapper}>
            <label htmlFor="email-input" className={styles.label}>
              Endereço de email
            </label>
            
            <InputWithIcon
              type="email"
              required
              placeholder="joao@email.com"
              id="email-input"
              Icon={AiOutlineMail}
            />
          </div>

          <div className={styles.label_input_wrapper}>
            <label htmlFor="email-input" className={styles.label}>
              Sua senha
            </label>

            <InputWithIcon
              type="password"
              required
              placeholder="Sua senha"
              id="password-input"
              Icon={AiOutlineLock}
            />
          </div>
        </div>

        <button type="submit" className={styles.button}>Entrar</button>

        <Link href="/signin" className={styles.link}>
          Já tem uma conta? Entre agora!
        </Link>
      </form>
    </>
  )
}
