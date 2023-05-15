import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import LoginForm from '@/components/LoginForm'
import LabelAndInputWithIcon from "@/components/LabelAndInputWithIcon"
import Button from "@/components/Button"
import CustomLink from "@/components/Link"
import SignInForm from '@/components/SignInForm'

export const metadata = {
  title: 'Entre em sua conta',
}

export default function SignIn() {
  return (
    <>
      <h1>Entre em sua conta</h1>

      <SignInForm />
    </>
  )
}
