'use client'

import SignInForm from '@/components/SignInForm'
import useJWT from '@/hooks/useJWT';

export default function SignIn() {
  const { data } = useJWT({ shouldExist: false, redirectTo: '/' })

  if (!data) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Entre em sua conta</h1>
      <SignInForm />
    </>
  )
}
