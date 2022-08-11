const router = require('express').Router();

const { verifyToken } = require('../../helpers/middlewares');
const { getById, getByUserId, create, updateFavorite, updateTaste, deleteById } = require('../../models/wineHasUser.model');

router.get('/user/:pId', verifyToken, (req, res) => {
  getByUserId(req.params.pId)
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
    res.json("Nueva relacion vino-usuario creada");
  } catch (err) {
    res.json({ err: err.message });
  }
});

router.put('/favorite/:pId', verifyToken, async (req, res) => {
  try {
    await updateFavorite(req.params.pId, req.body.favorite)
    res.json({ message: 'Actualizado' })
  } catch (err) {
    res.json({ error: err.message })
  }
});

router.put('/taste/:pId', verifyToken, (req, res) => {
  console.log(req.params.pId, req.body.taste)
  updateTaste(req.params.pId, req.body.taste)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

router.delete('/:pId', verifyToken, (req, res) => {
  deleteById(req.params.pId)
    .then(result => res.json(result))
    .catch(err => res.json({ error: err.message }))
});

module.exports = router;