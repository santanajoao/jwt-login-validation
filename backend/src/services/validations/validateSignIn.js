const { signInSchema } = require('./schema');
const { Account } = require('@/models');

const validateSignin = async ({ email, password }) => {
  const { error } = signInSchema.validate({ email, password })
  if (error) {
    return { type: 'INVALID_VALUE', message: error.message };
  }

  const account = await Account.findOne({ where: { email } });
  if (!account) {
    return { type: 'ACCOUNT_NOT_FOUND', message: 'Account not found!' }
  }

  if (!bcrypt.compareSync(password, account.password)) {
    return { type: 'WRONG_PASSWORD', message: 'Wrong password' };
  }

  return { type: null, message: '' };
};

module.exports = validateSignin;
