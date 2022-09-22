const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const fs = require('fs');

const { verifyToken } = require('../../helpers/middlewares');
const { getAll, create, getById, update, getByName, getByElaborationArea, getByListName, getBytype, getByOrigin, getByWineCellar } = require('../../models/wine.model');

router.get('/', verifyToken, (req, res) => {
  getAll()
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/name/:name', verifyToken, (req, res) => {
  getByName(req.params.name)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/listName/:name', verifyToken, (req, res) => {
  const name = '%' + req.params.name + '%'
  getByListName(name)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/elaborationArea/:area', verifyToken, (req, res) => {
  const area = '%' + req.params.area + '%'
  getByElaborationArea(area)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/type/:type', verifyToken, (req, res) => {
  getBytype(req.params.type)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/origin/:origin', verifyToken, (req, res) => {
  getByOrigin(req.params.origin)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/wineCellar/:wineCellar', verifyToken, (req, res) => {
  getByWineCellar(req.params.wineCellar)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/:id', verifyToken, (req, res) => {
  getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.post('/', verifyToken, upload.single('photo'), async (req, res) => {
  const extension = req.file.mimetype.split('/')[1];
  const newName = `${req.file.filename}.${extension}`;
  const newPath = `${req.file.path}.${extension}`;
  fs.renameSync(req.file.path, newPath);

  req.body.photo = newName;

  try {
    await create(req.body);
    res.json({ message: "Nuevo vino añadido" });
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.put('/:pId', verifyToken, (req, res) => {
  update(req.params.pId, req.body)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

module.exports = router;