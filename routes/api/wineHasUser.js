const router = require('express').Router();

const { getById, getByUserId, create, updateFavorite, updateTaste, deleteById } = require('../../models/wineHasUser.model');

router.get('/user/:pId', (req, res) => {
  getByUserId(req.params.pId)
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
    res.json("Nueva relacion vino-usuario creada");
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.put('/favorite/:pId', async (req, res) => {
  try {
    await updateFavorite(req.params.pId, req.body.favorite)
    res.json({ message: 'Actualizado' })
  } catch (err) {
    res.json({ error: err.message })
  }
});

router.put('/taste/:pId', (req, res) => {
  console.log(req.params.pId, req.body.taste)
  updateTaste(req.params.pId, req.body.taste)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.delete('/:pId', (req, res) => {
  deleteById(req.params.pId)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

module.exports = router;