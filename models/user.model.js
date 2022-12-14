const { executeQuery, executeQueryOne } = require("../helpers/utils");

const getAll = () => {
  return executeQuery('select * from user');
}

const create = ({ email, name, password }) => {
  return executeQuery('insert into user (email, name, password) values(?, ?, ?)', [email, name, password]);
}

const getByEmail = (email) => {
  return executeQueryOne('select * from user where email = ?', [email]);
}

const updateUser = ({ id, email, name, password }) => {
  return executeQuery('update user set  name=?, email=?, password=?  where id=?', [name, email, password, id]);
}

const updateIsActive = (userId, isActive) => {
  return executeQuery('update user set isActive = ? where id = ?', [isActive, userId]);
}

const getById = (pId) => {
  return executeQueryOne('select user.id, user.name, user.email, user.isActive from user where user.id = ?', [pId]);
}

const updatePassword = (password, token) => {
  return executeQuery('update user set password = ? where token = ?', [password, token]);
}
const getByToken = (token) => {
  return executeQueryOne('select * from user where token = ?', [token]);
}

const updateToken = (userEmail, token) => {
  return executeQuery('update user set token = ? where email = ?', [token, userEmail]);
}

const deleteToken = (pId) => {
  return executeQuery('update user set token = null where id = ?;', [pId]);
}

module.exports = {
  create, updateUser, getByEmail, getById, getAll, updateIsActive, updatePassword, updateToken, deleteToken, getByToken
}