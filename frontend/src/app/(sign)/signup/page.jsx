import SignUpForm from '@/components/SignUpForm'

export const metadata = {
  title: 'Crie sua conta',
}

export default function SignUp() {
  return (
    <>
      <h1>Crie sua conta</h1>

      <SignUpForm />
    </>
  )
}
