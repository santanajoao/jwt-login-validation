const { signUpSchema } = require('./schema');
const { Account } = require('@/models');

const validateSignUp = async ({ username, email, password }) => {
  const { error } = signUpSchema.validate({ username, email, password });
  if (error) {
    return { type: 'INVALID_VALUE', message: error.message };
  }

  const account = Account.findOne({ where: { email } });
  if (account) {
    return { type: 'EMAIL_IN_USE', message: 'Email already in use' };
  }

  return { type: null, message: '' };
};

module.exports = validateSignUp;
