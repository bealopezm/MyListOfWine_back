const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from type');
};
const getById = (id) => {
  return executeQueryOne('select * from type where id = ?', [id]);
};

const create = ({ name }) => {
  return executeQuery('insert into type (name) values (?)', [name]);
};

const update = (pId, { name }) => {
  return executeQuery('update type set name = ? where id = ?', [name, pId]);
};

module.exports = {
  getAll, create, getById, update
}