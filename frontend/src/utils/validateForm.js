export const validateUsername = (username) => {
  const MIN_USERNAME_LENGTH = 3

  if (!username) {
    return 'O nome é obrigatório'
  }

  if (username.length < MIN_USERNAME_LENGTH) {
    return `O nome deve ter no mínimo ${MIN_USERNAME_LENGTH} caracteres`
  }
  return ''
}

export const validateEmail = (email) => {
  if (!email) {
    return 'O email é obrigatório'
  }

  const emailRegex =  /[\d\w]+@[^\s@]+.\w{2,}/
  const valid = emailRegex.test(email)
  if (!valid) {
    return 'O email deve ser válido'
  }
  return ''
}

export const validatePassword = (password) => {
  const MIN_PASSWORD_LENGTH = 8

  if (!password) {
    return 'A senha é obrigatória'
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    return `A senha deve ter no mínimo ${MIN_PASSWORD_LENGTH} caracteres`
  }
  return ''
}

const validations = {
  validateEmail,
  validateUsername,
  validatePassword
}

export default validations
