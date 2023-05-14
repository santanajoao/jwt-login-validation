const statusMap = {
  ACCOUNT_NOT_FOUND: 404,
  WRONG_PASSWORD: 401,
  EMAIL_IN_USE: 409,
  INVALID_TOKEN: 401,
  INVALID_VALUE: 422,
};

const mapTypeToStatus = (type) => statusMap[type] || 500;

module.exports = mapTypeToStatus;
