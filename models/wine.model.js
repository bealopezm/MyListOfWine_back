const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {
  return executeQuery('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id');
};
const getById = (id) => {
  return executeQueryOne('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id where wine.id = ?', [id]);
};
const getByName = (name) => {
  return executeQueryOne('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id where wine.name = ?', [name]);
};
const getByListName = (name) => {
  return executeQuery('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id where wine.name LIKE ?', [name]);
};
const getByElaborationArea = (area) => {
  return executeQuery('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id where wine.elaborationArea LIKE ?', [area]);
};

const getBytype = (type) => {
  return executeQuery('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id where wine.Type_id = ?', [type]);
};

const getByOrigin = (origin) => {
  return executeQuery('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id where wine.Origin_id = ?', [origin]);
};

const getByWineCellar = (wineCellar) => {
  return executeQuery('SELECT wine.id, wine.name, wine.elaborationArea, wine.photo, origin.name as nameOrigin, type.name as type, winecellar.name as nameWineCellar  FROM wine join origin on origin.id = wine.Origin_id join type on type.id = wine.Type_id join winecellar on winecellar.id = wine.WineCellar_id where wine.WineCellar_id = ?', [wineCellar]);
};

const create = ({ name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id }) => {
  return executeQuery('insert into wine (name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id) values (?,?,?,?,?,?)', [name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id]);
};

const update = (pId, { name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id }) => {
  return executeQuery('update wine set name = ?, elaborationArea = ?, photo = ?, Origin_id = ?, WineCellar_id = ?, Type_id = ? where id = ?', [name, elaborationArea, photo, Origin_id, WineCellar_id, Type_id, pId]);
};

module.exports = {
  getAll, create, getById, update, getByName, getByElaborationArea, getByListName, getBytype, getByOrigin, getByWineCellar
}