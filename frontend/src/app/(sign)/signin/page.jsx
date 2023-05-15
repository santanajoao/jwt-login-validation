'use client'

import SignInForm from '@/components/SignInForm'
import { verifyToken } from '@/services/api';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// export const metadata = {
//   title: 'Entre em sua conta',
// }

export default function SignIn() {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    checkForToken()
  }, []);

  const checkForToken = async () => {
    const token = localStorage.getItem('token')
    
    if (!token) return setLoading(false)
    
    const result = await verifyToken(token)
    const valid = !result.message
    if (valid) return router.push('/')
    setLoading(false)
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Entre em sua conta</h1>
      <SignInForm />
    </>
  )
}
