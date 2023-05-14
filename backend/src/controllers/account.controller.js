const accountService = require('../services/account.service');
const mapTypeToStatus = require('../utils/mapTypeToStatus');

const handlePostSignIn = async (req, res) => {
  const { type, message } = await accountService.signin(req.body);
  if (type) {
    return res.status(mapTypeToStatus(type)).json({ message });
  }
  res.status(200).json({ token: message });
};

const handlePostSignUp = async (req, res) => {
  const { type, message } = await accountService.signup(req.body);
  if (type) {
    return res.status(mapTypeToStatus(type)).json({ message });
  }
  res.status(201).json({ token: message });
};

const handlePostTokenValidation = (req, res) => {
  const { token } = req.body;
  const { type, message } = accountService.validateToken(token);
  if (type) {
    return res.status(mapTypeToStatus(type)).json({ message });
  }
  res.status(200).json(message);
};

module.exports = {
  handlePostSignIn,
  handlePostSignUp,
  handlePostTokenValidation,
};
