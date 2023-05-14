const { emailSchema } = require("./schema");

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);
  if (error) {
    return { type: 'INVALID_VALUE', message: error.message };
  }
  return { type: null, message: '' };
};

module.exports = validateEmail;
