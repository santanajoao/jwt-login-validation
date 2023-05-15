'use client'

import { useState } from 'react'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import LoginForm from '../LoginForm'
import LabelAndInputWithIcon from '../LabelAndInputWithIcon'
import Button from '../Button'
import CustomLink from '../Link'
import validations from '@/utils/validateForm'


export default function SignInForm() {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries())

    const emailValidation = validations.validateEmail(data.email)
    setEmailError(emailValidation)
    
    const passwordValidation = validations.validatePassword(data.password)
    setPasswordError(passwordValidation)
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
          onChange={emailError ? () => setEmailError('') : null}
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
          onChange={passwordError ? () => setPasswordError('') : null}
        />
      </LoginForm.InputsWrapper>

      <Button type="submit">Criar</Button>

      <CustomLink href="/signup">
        Não possui conta? Crie uma agora!
      </CustomLink>
    </LoginForm.Form>
  )
}
