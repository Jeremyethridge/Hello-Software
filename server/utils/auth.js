const jwt = require("jsonwebtoken");

const generateAuthToken = (user) => {
  // Generate an authentication token for the user
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET || "secretKeyLOL"
  );

  return token;
};

module.exports = generateAuthToken;
