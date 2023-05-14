const { generateToken, readToken } = require('../auth/JWT');
const { Account } = require('../models');
const validations = require('./validations');
const bcrypt = require('bcryptjs');

const generateAccountToken = (account) => {
  const { password: _password, ...user } = account.dataValues;
  return generateToken(user);
}

const signin = async ({ email, password }) => {
  const error = await validations.validateSignIn({ email, password });
  if (error.type) return error;

  const account = error.message;
  const token = generateAccountToken(account);
  return { type: null, message: token };
};

const signup = async ({ username, email, password }) => {
  const error = await validations.validateSignUp({ username, email, password });
  if (error.type) return error;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const newAccount = await Account.create({
    username, email, password: hash,
  });
  const token = generateAccountToken(newAccount);
  return { type: null, message: token };
};

const validateToken = (token) => {
  const tokenData = readToken(token);
  if (!tokenData) {
    return { type: 'INVALID_TOKEN', message: 'Invalid token' };
  }
  return { type: null, message: tokenData };
};

module.exports = {
  signin,
  signup,
  validateToken,
};
