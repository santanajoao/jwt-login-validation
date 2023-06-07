'use client'

import Loading from '@/components/Loading'
import SignUpForm from '@/components/SignUpForm'
import useJWT from '@/hooks/useJWT'

export default function SignUp() {
  const { data } = useJWT({ shouldExist: false, redirectTo: '/' })

  if (!data) return <Loading />

  return (
    <>
      <h1>Crie sua conta</h1>
      <SignUpForm />
    </>
  )
}
