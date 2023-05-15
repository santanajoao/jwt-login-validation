'use client'

import { AiOutlineLike } from 'react-icons/ai'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { verifyToken } from '@/services/api'
import { useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Página inicial',
// }

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState('')

  useEffect(() => {
    checkForToken()
  }, [])

  const checkForToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/signin')
      return null
    }

    const result = await verifyToken(token)
    if (result.message) {
      router.push('/signin')
      return null
    }
    
    setUser(result.data.username)
    setLoading(false)
  }

  const signOut = () => {
    localStorage.removeItem('token')
    router.push('/signin')
  }

  if (loading) {
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
            Olá, <strong>{user}</strong>!
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
