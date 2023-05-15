'use client'

import { useState } from 'react'
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import LoginForm from '../LoginForm'
import LabelAndInputWithIcon from '../LabelAndInputWithIcon'
import Button from '../Button'
import CustomLink from '../CustomLink'
import validations from '@/utils/validateForm'
import { signup } from '@/services/api'
import { useRouter } from 'next/navigation'
import ErrorMessage from '../ErrorMessage'

export default function SignUpForm() {
  const router = useRouter()
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [apiError, setApiError] = useState('');

  const cleanErrors = () => {
    setApiError('')
    setEmailError('')
    setNameError('')
    setPasswordError('')
  }

  const validateForm = ({ username, email, password }) => {
    const nameValidation = validations.validateUsername(username)
    setNameError(nameValidation)

    const emailValidation = validations.validateEmail(email)
    setEmailError(emailValidation)

    const passwordValidation = validations.validatePassword(password)
    setPasswordError(passwordValidation)

    return !!(nameValidation || emailValidation || passwordValidation)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    const validationError = validateForm(data)
    if (validationError) return null

    const result = await signup(data)
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
          id="name-input"
          name="username"
          label="Nome"
          inputType="text"
          required
          placeholder="Como voce gostaria de ser chamado"
          Icon={AiOutlineUser}
          error={nameError}
          onChange={nameError ? cleanErrors : null}
        />

        <LabelAndInputWithIcon
          id="email-input"
          name="email"
          label="Endereço de email"
          inputType="email"
          required
          placeholder="joao@gmail.com"
          Icon={AiOutlineMail}
          error={emailError}
          onChange={emailError ? cleanErrors : null}
        />

        <LabelAndInputWithIcon
          name="password"
          id="password-input"
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

      
      <Button type="submit">Criar</Button>

      <CustomLink href="/signin">
        Já tem uma conta? Entre agora!
      </CustomLink>
    </LoginForm.Form>
  )
}
