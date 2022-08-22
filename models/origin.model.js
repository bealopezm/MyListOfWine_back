const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from origin');
};
const getById = (id) => {
  return executeQueryOne('select * from origin where id = ?', [id]);
};

const create = ({ name }) => {
  return executeQuery('insert into origin ( name) values (?)', [name]);
};

const update = (pId, { name }) => {
  return executeQuery('update origin set name = ? where id = ?', [name, pId]);
};

module.exports = {
  getAll, create, getById, update
}