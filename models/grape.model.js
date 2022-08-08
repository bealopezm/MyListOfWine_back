const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from grape');
};
const getById = (id) => {
  return executeQueryOne('select * from grape where id = ?', [id]);
};

const create = ({ name }) => {
  return executeQuery('insert into grape (name) values (?)', [name]);
};

const update = (pId, { name }) => {
  return executeQuery('update grape set name = ? where id = ?', [name, pId]);
};

module.exports = {
  getAll, create, getById, update
}