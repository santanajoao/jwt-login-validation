export const metadata = {
  title: 'Página inicial',
}

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>Essa página requere autenticação. Se o usuário não estiver logado deve ser redirecionado para a página de sign-in. Ao logar deve ser redirecionado para cá.</p>
    </main>
  )
}
