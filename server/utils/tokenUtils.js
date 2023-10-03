import jwt from "jsonwebtoken";

const createJWT = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
  return token;
};

const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};

export { createJWT, verifyJWT };
