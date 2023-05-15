'use client'

import SignUpForm from '@/components/SignUpForm'
import { verifyToken } from '@/services/api'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

// export const metadata = {
//   title: 'Crie sua conta',
// }

export default function SignUp() {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  
  useEffect(() => {
    checkForToken()
  }, []);

  const checkForToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return setLoading(false)
    
    const result = await verifyToken(token)
    const valid = !result.message
    if (valid) router.push('/')
    setLoading(false)
  }

  if (loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <h1>Crie sua conta</h1>
      <SignUpForm />
    </>
  )
}
