const jwt = require('jsonwebtoken');
const { AuthError } = require('../errors/index-errors');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    throw new AuthError('Требуется авторизация');
  }

  let payload;

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    return next(new AuthError('Требуется авторизация'));
  }

  req.user = payload;

  return next();
};
