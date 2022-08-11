const router = require('express').Router();

const { getAll, create, getById, update } = require('../../models/origin.model');
const { verifyToken } = require('../../helpers/middlewares');

router.get('/', verifyToken, (req, res) => {
  getAll()
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
    await create(req.body);
    res.json("Nuevo Origen añadido");
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