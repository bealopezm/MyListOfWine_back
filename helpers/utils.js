const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

// funciones refactorizadas 
function executeQuery(sql, data = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, data, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const executeQueryOne = (sql, data = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, data, (err, result) => {
      if (err) reject(err);
      if (result.length === 0) resolve(null);
      resolve(result[0]);
    });
  });
}

const createToken = (user) => {
  const obj = {
    user_id: user.id,
  }
  return jwt.sign(obj, process.env.SECRET_KEY);
}

module.exports = {
  executeQuery, executeQueryOne, createToken
}