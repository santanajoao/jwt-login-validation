import { AiOutlineLike } from 'react-icons/ai';
import styles from './page.module.css';

export const metadata = {
  title: 'Página inicial',
}

export default function Home() {
  return (
    <> 
      <header className={styles.header}>
        <div className={styles.user_container}>
          <span className={styles.user_message}>
            Olá, <strong>nome do usuário</strong>!
          </span>
          <button type="button" className={styles.logout_button}>Sair</button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.main_message}>
          <AiOutlineLike className={styles.like} />
          <h1>Logado e Autenticado</h1>
          <p>Se você está aqui, você está logado!</p>
        </div>
      </main>
    </>
  )
}
