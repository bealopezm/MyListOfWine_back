const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getByUserId = (userId) => {
  return executeQuery('select * from wine_has_user where User_id = ?', [userId]);
};
const getById = (pId) => {
  return executeQueryOne('select * from wine_has_user where id = ?', [pId]);
};

const create = ({ Wine_id, User_id, favorite, taste }) => {
  return executeQuery('insert into wine_has_user (Wine_id, User_id, favorite, taste) values (?,?,?,?)', [Wine_id, User_id, favorite, taste]);
};

const updateFavorite = (pId, favorite) => {
  return executeQuery('update wine_has_user set favorite = ? where id = ?', [favorite, pId])
};

const updateTaste = (pId, taste) => {
  return executeQuery('update wine_has_user set taste = ? where id = ?', [taste, pId])
};

const deleteById = (pId) => {
  return executeQuery('delete from wine_has_user where id = ?', [pId])
};

module.exports = {
  create, getByUserId, getById, updateFavorite, updateTaste, deleteById
}