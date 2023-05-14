import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import LoginForm from '@/components/LoginForm'
import LabelAndInputWithIcon from "@/components/LabelAndInputWithIcon"
import Button from "@/components/Button"
import CustomLink from "@/components/Link"

export const metadata = {
  title: 'Crie sua conta',
}

export default function SignUp() {
  return (
    <>
      <h1>Crie sua conta</h1>

      <LoginForm.Form>
        <LoginForm.InputsWrapper>
          <LabelAndInputWithIcon
            id="name-input"
            name="username"
            label="Nome"
            inputType="text"
            required
            placeholder="Como voce gostaria de ser chamado"
            Icon={AiOutlineUser}
          />

          <LabelAndInputWithIcon
            id="email-input"
            name="email"
            label="Endereço de email"
            inputType="email"
            required
            placeholder="joao@gmail.com"
            Icon={AiOutlineMail}
          />

          <LabelAndInputWithIcon
            name="password"
            id="password-input"
            label="Senha"
            inputType="password"
            required
            placeholder="Sua senha"
            Icon={AiOutlineLock}
          />
        </LoginForm.InputsWrapper>

        <Button type="submit">Criar</Button>

        <CustomLink href="/signin">Já tem uma conta? Entre agora!</CustomLink>
      </LoginForm.Form>
    </>
  )
}
