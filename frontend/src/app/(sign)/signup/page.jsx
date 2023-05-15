'use client'

import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import LoginForm from '@/components/LoginForm'
import LabelAndInputWithIcon from "@/components/LabelAndInputWithIcon"
import Button from "@/components/Button"
import CustomLink from "@/components/Link"
import { useState } from 'react'
import validations from '@/utils/validateForm'

// export const metadata = {
//   title: 'Crie sua conta',
// }

export default function SignUp() {
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData.entries());

    const nameValidation = validations.validateUsername(data.username);
    setNameError(nameValidation);

    const emailValidation = validations.validateEmail(data.email);
    setEmailError(emailValidation)

    const passwordValidation = validations.validatePassword(data.password);
    setPasswordError(passwordValidation);
  }

  return (
    <>
      <h1>Crie sua conta</h1>

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
            onChange={nameError ? () => setNameError('') : null}
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
            onChange={emailError ? () => setEmailError('') : null}
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
            onChange={passwordError ? () => setPasswordError('') : null}
          />
          
        </LoginForm.InputsWrapper>

        <Button type="submit">Criar</Button>

        <CustomLink href="/signin">Já tem uma conta? Entre agora!</CustomLink>
      </LoginForm.Form>
    </>
  )
}
