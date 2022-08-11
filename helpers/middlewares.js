const jwt = require('jsonwebtoken');
const { getById } = require('../models/user.model');

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.json({ err: 'Autentificación fallida' });
  }

  let obj;
  try {
    obj = jwt.verify(token, process.env.SECRET_KEY);
  } catch (err) {
    return res.json({ err: 'Autentificación fallida' });
  }

  const user = await getById(obj.user_id);
  req.user = user;

  next();

}

module.exports = {
  verifyToken
}