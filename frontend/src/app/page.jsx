'use client'

import { AiOutlineLike } from 'react-icons/ai'
import styles from './page.module.css'
import useJWT from '@/hooks/useJWT'

export default function Home() {
  const { data, signOut } = useJWT({ shouldExist: true, redirectTo: '/signin' })
  
  if (!data) {
    return (
      <h1 style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        Carregando...
      </h1>
    )
  }

  return (
    <> 
      <header className={styles.header}>
        <div className={styles.user_container}>
          <span className={styles.user_message}>
            Olá, <strong>{data?.data.username}</strong>!
          </span>
          <button onClick={signOut} type="button" className={styles.logout_button}>Sair</button>
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
