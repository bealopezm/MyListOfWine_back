const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from wineCellar');
};
const getById = (id) => {
  return executeQueryOne('select * from wineCellar where id = ?', [id]);
};

const create = ({ name, Origin_id }) => {
  return executeQuery('insert into wineCellar (name, Origin_id) values (?,?)', [name, Origin_id]);
};

const update = (pId, { name, Origin_id }) => {
  return executeQuery('update wineCellar set name = ?, Origin_id = ? where id = ?', [name, Origin_id, pId]);
};

module.exports = {
  getAll, create, getById, update
}