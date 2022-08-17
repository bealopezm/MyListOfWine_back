const router = require('express').Router();

const { verifyToken } = require('../../helpers/middlewares');
const { getAll, create, getById, update, getByName } = require('../../models/wine.model');

router.get('/', verifyToken, (req, res) => {
  getAll()
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/name/:name', verifyToken, (req, res) => {
  console.log(req.params.name)
  getByName(req.params.name)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/:id', verifyToken, (req, res) => {
  getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.post('/', verifyToken, async (req, res) => {
  try {
    console.log(req.body)
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