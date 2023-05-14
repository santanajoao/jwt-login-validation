import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import LoginForm from '@/components/LoginForm';
import LabelAndInputWithIcon from "@/components/LabelAndInputWithIcon"
import Button from "@/components/Button"
import CustomLink from "@/components/Link";

export const metadata = {
  title: 'Entre em sua conta',
}

export default function SignIn() {
  return (
    <>
      <h1>Entre em sua conta</h1>

      <LoginForm.Form>
        <LoginForm.InputsWrapper>
          <LabelAndInputWithIcon
            id="email-input"
            label="Endereço de email"
            inputType="email"
            required
            placeholder="joao@gmail.com"
            Icon={AiOutlineMail}
          />

          <LabelAndInputWithIcon
            id="password-input"
            label="Senha"
            inputType="password"
            required
            placeholder="Sua senha"
            Icon={AiOutlineLock}
          />
        </LoginForm.InputsWrapper>

        <Button type="submit">Criar</Button>

        <CustomLink href="/signup">
          Não possui conta? Crie uma agora!
        </CustomLink>
      </LoginForm.Form>
    </>
  )
}
