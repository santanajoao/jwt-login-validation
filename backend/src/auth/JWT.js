const jwt = require('jsonwebtoken');

const generateToken = (data) => {
  const header = {
    algorithm: 'HS256',
    expiresIn: '7d',
  };

  const payload = {
    data,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, header);
};

const readToken = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  readToken,
}
