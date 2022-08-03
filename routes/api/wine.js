const router = require('express').Router();

const { getAll, create, getById, update } = require('../../models/wine.model');

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

    res.json("Nuevo vino añadido");
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.put('/:pId', (req, res) => {
  console.log(req.params.pId, req.body)
  update(req.params.pId, req.body)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

module.exports = router;