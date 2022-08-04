const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from origin');
};
const getById = (id) => {
  return executeQueryOne('select * from origin where id = ?', [id]);
};

const create = ({ type, name }) => {
  return executeQuery('insert into origin (type, name) values (?,?)', [type, name]);
};

const update = (pId, { type, name }) => {
  return executeQuery('update origin set type = ?, name = ? where id = ?', [type, name, pId]);
};

module.exports = {
  getAll, create, getById, update
}