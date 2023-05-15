export const signin = async ({ email, password }) => {
  const response = await fetch(
    `http://localhost:3005/account/signin`,
    {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.json()
}

export const signup = async ({ username, email, password }) => {
  const response = await fetch(
    `http://localhost:3005/account/signup`,
    {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.json()
}

export const verifyToken = async (token) => {
  const response = await fetch(
    `http://localhost:3005/account/verify`,
    {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: { 'Content-Type': 'application/json' },
    },
  )

  return response.json()
}
