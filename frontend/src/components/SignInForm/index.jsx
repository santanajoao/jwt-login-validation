'use client'

import { useState } from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import LoginForm from '../LoginForm'
import LabelAndInputWithIcon from '../LabelAndInputWithIcon'
import Button from '../Button'
import CustomLink from '../CustomLink'
import validations from '@/utils/validateForm'
import { useRouter } from 'next/navigation'
import { signin } from '@/services/api'
import ErrorMessage from '../ErrorMessage'


export default function SignInForm() {
  const router = useRouter()
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [apiError, setApiError] = useState('');

  const cleanErrors = () => {
    setApiError('')
    setEmailError('')
    setNameError('')
    setPasswordError('')
  }

  const validateForm = ({ email, password }) => {
    const emailValidation = validations.validateEmail(email)
    setEmailError(emailValidation)

    const passwordValidation = validations.validatePassword(password)
    setPasswordError(passwordValidation)

    return !!(emailValidation || passwordValidation)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    const validationError = validateForm(data)
    if (validationError) return null

    const result = await signin(data)
    if (result.token) {
      localStorage.setItem('token', result.token)
      router.push('/')
    } else {
      setApiError(result.message)
    }
  }

  return (
    <LoginForm.Form onSubmit={handleSubmit}>
      <LoginForm.InputsWrapper>
        <LabelAndInputWithIcon
          id="email-input"
          label="Endereço de email"
          name="email"
          inputType="email"
          required
          placeholder="joao@gmail.com"
          Icon={AiOutlineMail}
          error={emailError}
          onChange={emailError ? cleanErrors : null}
        />

        <LabelAndInputWithIcon
          id="password-input"
          name="password"
          label="Senha"
          inputType="password"
          required
          placeholder="Sua senha"
          Icon={AiOutlineLock}
          error={passwordError}
          onChange={passwordError ? cleanErrors : null}
        />

        {apiError && <ErrorMessage>{apiError}</ErrorMessage>}
      </LoginForm.InputsWrapper>

      <Button type="submit">Entrar</Button>

      <CustomLink href="/signup">
        Não possui conta? Crie uma agora!
      </CustomLink>
    </LoginForm.Form>
  )
}
