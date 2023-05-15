'use client'

import SignUpForm from '@/components/SignUpForm'
import useJWT from '@/hooks/useJWT'

// export const metadata = {
//   title: 'Crie sua conta',
// }

export default function SignUp() {
  const { data } = useJWT({ shouldExist: false, redirectTo: '/' })

  if (!data) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <h1>Crie sua conta</h1>
      <SignUpForm />
    </>
  )
}
