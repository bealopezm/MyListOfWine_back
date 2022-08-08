const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('select * from wine');
};
const getById = (id) => {
  return executeQueryOne('select * from wine where id = ?', [id]);
};

const create = ({ name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id, Grape_id }) => {
  return executeQuery('insert into wine (name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id, Grape_id) values (?,?,?,?,?,?,?)', [name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id, Grape_id]);
};

const update = (pId, { name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id, Grape_id }) => {
  return executeQuery('update wine set name = ?, elaborationArea = ?, photo = ?, Origin_id = ?, WineCellar_id = ?, Type_id = ?, Grape_id = ? where id = ?', [name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id, Grape_id, pId]);
};

module.exports = {
  getAll, create, getById, update
}