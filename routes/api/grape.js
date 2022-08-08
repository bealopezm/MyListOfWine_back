const router = require('express').Router();

const { getAll, create, getById, update } = require('../../models/grape.model');

router.get('/', (req, res) => {
  getAll()
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.get('/:id', (req, res) => {
  getById(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.post('/', async (req, res) => {
  try {
    await create(req.body);
    res.json("Nueva uva añadido");
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.put('/:pId', (req, res) => {
  update(req.params.pId, req.body)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

module.exports = router;